import { STEPS } from '../data.js';

export default function Steps() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <h2>How you get hired with Hirelane</h2>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__n" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
