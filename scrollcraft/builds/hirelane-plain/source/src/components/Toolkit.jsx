import { TOOLS } from '../data.js';

export default function Toolkit() {
  return (
    <section className="section">
      <div className="wrap toolkit">
        <div className="toolkit__intro">
          <h2>Free tools for your own search, too</h2>
          <p className="lead">
            Every account includes the same tools our assistants use. No plan needed.
          </p>
          <a className="btn btn--ghost" href="#call">Create a free account</a>
        </div>
        <ul className="toolkit__list">
          {TOOLS.map((t) => (
            <li key={t.name}>
              <h3>{t.name}</h3>
              <p>{t.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
