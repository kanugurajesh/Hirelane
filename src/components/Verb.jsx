import Sticker from './Sticker.jsx';

// Acts 2 to 5. One verb per screen, wiped in across its letterforms. The wipe
// sits on a wrapper because the word's own box is shorter than its glyphs.
export default function Verb({ id, word, line, sticker, ground, align, wipe, ribbon, ribbonSm, fit }) {
  return (
    <section
      id={id}
      className={`act verb verb--${ground} verb--${align}`}
      data-sc-act="flow"
      data-ribbon={ribbon}
      data-ribbon-sm={ribbonSm}
    >
      <div className="verb__inner">
        <div className="verb__wipe" data-sc-reveal={wipe} data-sc-reveal-at="0.1 0.4">
          <h2 className="verb__word" style={{ '--fit': fit }}>{word}</h2>
        </div>
        <p className="verb__line">{line}</p>
      </div>
      <Sticker name={sticker.name} className="verb__st" size="clamp(76px, 11vw, 160px)" r={sticker.r} />
    </section>
  );
}
