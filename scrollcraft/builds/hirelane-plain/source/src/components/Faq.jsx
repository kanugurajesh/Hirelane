import { FAQ } from '../data.js';

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <div>
          <h2>Questions people ask before signing up</h2>
          <p className="muted">Still unsure? The founders answer the chat on weekdays.</p>
        </div>
        <div className="faq__list">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
