import { RESULTS } from '../data.js';

export default function Results() {
  return (
    <section className="section" id="results">
      <div className="wrap results">
        <div>
          <h2>What happened to the 1,800 clients who finished a plan in 2025</h2>
          <p className="muted">
            Counted from client-reported offers between January and December 2025. Clients who
            paused before using half their applications are included.
          </p>
        </div>
        <dl className="results__list">
          {RESULTS.map((r) => (
            <div key={r.label} className="results__item">
              <dt>{r.value}</dt>
              <dd>{r.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
