import { useEffect, useRef, useState } from 'react';
import Tube from './Tube.jsx';
import { onFrame, reducedMotion } from '../lib/frame.js';
import { smoothPath, collectPoints, buildLookup, drawnFraction, setDraw } from '../lib/ribbon.js';

// The pen sits at this fraction of the viewport. Everything above it is drawn.
export const PEN = 0.62;

// The signature move: one ribbon the length of the page, drawn by scrolling.
// It runs through every section marked with data-ribbon and ends at the top of
// the peak, where Peak.jsx takes over and ties the bow.
export default function RibbonTrail({ mainRef }) {
  const [geo, setGeo] = useState(null);
  const tubeRef = useRef(null);
  const lutRef = useRef(null);

  // Rebuild the path whenever the page's size changes (fonts, engine layout,
  // resize). ResizeObserver fires after the engine sets pinned act heights.
  useEffect(() => {
    const main = mainRef.current;
    let raf = 0;
    const build = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = main.clientWidth;
        const h = main.offsetHeight;
        const width = Math.round(Math.min(Math.max(w * 0.05, 34), 76));
        const loopR = Math.max(width * 1.5, 56);
        const d = smoothPath(collectPoints(main, w, loopR));
        setGeo((g) => (g && g.d === d && g.w === w && g.h === h ? g : { d, w, h, width }));
      });
    };
    const ro = new ResizeObserver(build);
    ro.observe(main);
    document.fonts?.ready.then(build);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [mainRef]);

  useEffect(() => {
    if (!geo || !tubeRef.current) return;
    lutRef.current = buildLookup(tubeRef.current.querySelector('.tube__body'));
    const main = mainRef.current;
    return onFrame(() => {
      const penY = scrollY + innerHeight * PEN - (main.getBoundingClientRect().top + scrollY);
      const f = reducedMotion ? 1 : drawnFraction(lutRef.current, penY);
      setDraw(tubeRef.current, f);
    });
  }, [geo, mainRef]);

  return (
    <svg
      className="trail"
      aria-hidden="true"
      width={geo?.w || 0}
      height={geo?.h || 0}
      viewBox={geo ? `0 0 ${geo.w} ${geo.h}` : undefined}
    >
      {geo && <Tube ref={tubeRef} d={geo.d} width={geo.width} />}
    </svg>
  );
}
