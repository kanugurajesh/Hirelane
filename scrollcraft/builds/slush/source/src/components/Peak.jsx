import { useEffect, useRef, useState } from 'react';
import Tube from './Tube.jsx';
import Sticker from './Sticker.jsx';
import { PEN } from './RibbonTrail.jsx';
import { onFrame, reducedMotion, clamp01, easeInOut } from '../lib/frame.js';
import { smoothPath, setDraw } from '../lib/ribbon.js';

// Act 8, the peak. The page ribbon ends at this section's top edge, exactly
// where this stage's ribbon begins, so it reads as one line. While the stage
// slides in, the same pen keeps drawing it down to the knot. Once pinned, the
// act's progress loops it into a bow, the knot pulls tight, and GET SLUSH
// lands underneath.
function bowGeometry(W, H) {
  const narrow = W < 700;
  const s = narrow ? Math.min(W * 0.2, H * 0.11) : Math.min(W * 0.13, H * 0.16);
  const K = [W / 2, H * (narrow ? 0.28 : 0.27)];
  const [kx, ky] = K;
  const drop = smoothPath([
    [W / 2, -40],
    [W / 2 + s * 0.35, ky * 0.45],
    K,
  ]);
  const loops = smoothPath([
    K,
    [kx - s * 0.7, ky - s * 0.75],
    [kx - s * 1.55, ky - s * 0.7],
    [kx - s * 1.8, ky + s * 0.05],
    [kx - s * 1.15, ky + s * 0.6],
    K,
    [kx + s * 1.15, ky - s * 0.6],
    [kx + s * 1.8, ky - s * 0.05],
    [kx + s * 1.55, ky + s * 0.7],
    [kx + s * 0.7, ky + s * 0.75],
    K,
    [kx + s * 0.45, ky + s * 0.9],
    [kx + s * 0.95, ky + s * 1.35],
    [kx + s * 0.85, ky + s * 1.7],
  ]);
  const tail = smoothPath([
    K,
    [kx - s * 0.45, ky + s * 0.9],
    [kx - s * 0.95, ky + s * 1.3],
    [kx - s * 1.1, ky + s * 1.65],
  ]);
  const width = Math.round(Math.min(Math.max(W * 0.05, 34), 76));
  return { W, H, K, s, drop, loops, tail, width };
}

export default function Peak() {
  const secRef = useRef(null);
  const stageRef = useRef(null);
  const dropRef = useRef(null);
  const loopsRef = useRef(null);
  const tailRef = useRef(null);
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    const stage = stageRef.current;
    const ro = new ResizeObserver(() => {
      const W = stage.clientWidth;
      const H = stage.clientHeight;
      setGeo((g) => (g && g.W === W && g.H === H ? g : bowGeometry(W, H)));
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!geo) return;
    const sec = secRef.current;
    return onFrame(() => {
      const vh = innerHeight;
      const r = sec.getBoundingClientRect();
      const p = clamp01(-r.top / (r.height - vh));
      // Before the pin, the stage top is r.top: the pen draws the drop.
      const dropF = reducedMotion ? 1 : clamp01((vh * PEN - r.top) / (geo.K[1] + 40));
      const loopF = reducedMotion ? 1 : easeInOut(clamp01((p - 0.04) / 0.56));
      const tailF = reducedMotion ? 1 : clamp01((p - 0.42) / 0.2);
      // The knot pulls tight with a little overshoot.
      const k = reducedMotion ? 1 : clamp01((p - 0.58) / 0.1);
      const knot = k === 0 ? 0 : 1 + Math.sin(k * Math.PI) * 0.35;
      setDraw(dropRef.current, dropF);
      setDraw(loopsRef.current, loopF);
      setDraw(tailRef.current, tailF);
      sec.style.setProperty('--knot', knot.toFixed(3));
      sec.style.setProperty('--pk', reducedMotion ? '1' : p.toFixed(4));
    });
  }, [geo]);

  // A keyboard user can tab to the buttons before the bow is tied. Move them
  // to the point where everything is visible instead of focusing an invisible
  // control.
  const onFocus = () => {
    if (reducedMotion) return;
    const r = secRef.current.getBoundingClientRect();
    const target = scrollY + r.top + (r.height - innerHeight) * 0.9;
    if (Math.abs(scrollY - target) > 4) scrollTo({ top: target, behavior: 'instant' });
  };

  return (
    <section
      ref={secRef}
      className="act peak"
      data-sc-act="pin"
      data-sc-span="3.2"
      data-ribbon="0.5:0"
    >
      {/* #get lands where the bow is already tied, not at the empty start. */}
      <span id="get" className="peak__anchor" aria-hidden="true" />
      <div ref={stageRef} data-sc-stage className="peak__stage">
        <svg
          className="peak__bow"
          aria-hidden="true"
          viewBox={geo ? `0 0 ${geo.W} ${geo.H}` : undefined}
        >
          {geo && (
            <>
              <Tube ref={tailRef} d={geo.tail} width={geo.width} />
              <Tube ref={dropRef} d={geo.drop} width={geo.width} />
              <Tube ref={loopsRef} d={geo.loops} width={geo.width} />
              <rect
                className="peak__knot"
                x={geo.K[0] - geo.width * 0.75}
                y={geo.K[1] - geo.width * 0.7}
                width={geo.width * 1.5}
                height={geo.width * 1.4}
                rx={geo.width * 0.45}
                style={{ transformOrigin: `${geo.K[0]}px ${geo.K[1]}px` }}
              />
            </>
          )}
        </svg>

        <Sticker name="rocket" className="peak__st peak__st--a" size="clamp(56px, 7vw, 110px)" r={-16} />
        <Sticker name="check" className="peak__st peak__st--b" size="clamp(52px, 6vw, 96px)" r={12} />
        <Sticker name="star" className="peak__st peak__st--c" size="clamp(44px, 5vw, 80px)" r={-6} />
        <Sticker name="heart" className="peak__st peak__st--d" size="clamp(48px, 6vw, 92px)" r={14} />

        <div className="peak__copy">
          <h2 className="peak__title">Get Slush</h2>
          <p className="peak__line">On Chrome, iPhone and Android, or right in your browser.</p>
          <div className="btn-row">
            <a className="btn btn--filled" href="#" onFocus={onFocus}>Add to Chrome</a>
            <a className="btn btn--ghost" href="#" onFocus={onFocus}>Open the web app</a>
          </div>
        </div>
      </div>
    </section>
  );
}
