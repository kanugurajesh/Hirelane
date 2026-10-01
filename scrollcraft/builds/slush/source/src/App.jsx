import { useEffect, useRef } from 'react';
import SvgDefs from './components/SvgDefs.jsx';
import Marquee from './components/Marquee.jsx';
import Nav from './components/Nav.jsx';
import RibbonTrail from './components/RibbonTrail.jsx';
import Hero from './components/Hero.jsx';
import Verb from './components/Verb.jsx';
import Seed from './components/Seed.jsx';
import Quiet from './components/Quiet.jsx';
import Peak from './components/Peak.jsx';
import Close from './components/Close.jsx';

// x:y ribbon waypoints per section (x = page width, y = section height).
// L / R curls the ribbon round that point, beside the sticker.
const VERBS = [
  {
    id: 'send', word: 'Send', fit: 29, ground: 'lavender', align: 'lead', wipe: 'right',
    line: 'Pay anyone by name, not a 66-character address.',
    sticker: { name: 'plane', r: -10 },
    ribbon: '0.5:0.08 0.8:0.5:R 0.62:0.95',
  },
  {
    id: 'swap', word: 'Swap', fit: 29, ground: 'mint', align: 'trail', wipe: 'left',
    line: 'Trade one coin for another without leaving your wallet.',
    sticker: { name: 'swap', r: 8 },
    ribbon: '0.36:0.12 0.2:0.5:L 0.4:0.95',
  },
  {
    id: 'stake', word: 'Stake', fit: 23, ground: 'white', align: 'center', wipe: 'up',
    line: 'Put your SUI to work with a validator you pick, and earn rewards.',
    sticker: { name: 'coin', r: -12 },
    ribbon: '0.5:0.08 0.5:0.9',
  },
  {
    id: 'collect', word: 'Collect', fit: 16.4, ground: 'violet', align: 'lead', wipe: 'right',
    line: 'Keep your NFTs and collectibles in one place you can actually browse.',
    sticker: { name: 'heart', r: 12 },
    ribbon: '0.66:0.1 0.84:0.52:R 0.5:0.95',
    ribbonSm: '0.82:0.06 0.86:0.24:R 0.88:0.97',
  },
];

export default function App() {
  const mainRef = useRef(null);

  // The engine reads data-sc-* off the rendered markup. Mount it once; it has
  // no teardown, so StrictMode's second effect pass must not mount it again.
  useEffect(() => {
    if (window.__slushScMounted) return;
    window.__slushScMounted = true;
    window.ScrollCraft.mount(document.body);
  }, []);

  return (
    <>
      <SvgDefs />
      <div className="paper" aria-hidden="true" />
      <Marquee />
      <Nav />
      <main id="top" ref={mainRef}>
        <RibbonTrail mainRef={mainRef} />
        <Hero />
        {VERBS.map((v) => (
          <Verb key={v.id} {...v} />
        ))}
        <Seed />
        <Quiet />
        <Peak />
      </main>
      <Close />
    </>
  );
}
