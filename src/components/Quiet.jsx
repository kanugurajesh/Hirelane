import Sticker from './Sticker.jsx';

// Act 7. The authored silence before the peak: grey ground, plain sentences,
// one sticker, and the ribbon running straight down the edge.
const POINTS = [
  'You approve every role before anything is sent.',
  'Every application comes with a screenshot of the submitted form.',
  'We never add a skill, title or date you have not confirmed.',
];

export default function Quiet() {
  return (
    <section className="act quiet" data-sc-act="flow" data-ribbon="0.9:0.06 0.91:0.6 0.78:0.97">
      <div className="quiet__inner" data-sc-stagger="70" data-sc-in>
        <Sticker name="lock" className="quiet__st" size="clamp(56px, 6vw, 84px)" r={-8} />
        <h2 className="quiet__title">Nothing goes out without you.</h2>
        <ul className="quiet__list">
          {POINTS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
