import { useEffect, useRef } from 'react';
import { onFrame } from '../lib/frame.js';

// Minimal chrome: the mark, and the one action. The action stays out of the
// way while the hero already shows it, then arrives once the hero has gone.
export default function Nav() {
  const ctaRef = useRef(null);

  useEffect(
    () =>
      onFrame(() => {
        const hero = document.querySelector('.hero');
        const show = scrollY > (hero ? hero.offsetHeight : innerHeight) - innerHeight * 0.1;
        const el = ctaRef.current;
        if (el.classList.contains('is-on') !== show) {
          el.classList.toggle('is-on', show);
          el.tabIndex = show ? 0 : -1;
        }
      }),
    []
  );

  return (
    <div className="nav-wrap">
      <header className="nav">
        <a href="#top" className="logo" aria-label="Slush, back to top">S</a>
        <a ref={ctaRef} className="btn btn--filled nav__cta" href="#get" tabIndex={-1}>Get Slush</a>
      </header>
    </div>
  );
}
