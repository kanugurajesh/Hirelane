import { useEffect, useState } from 'react';
import { LEDGER } from '../data.js';

const VISIBLE = 6;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The hero's one moving thing: a live view of an assistant's application log.
// A new submission lands at the top every couple of seconds.
export default function Ledger() {
  const [count, setCount] = useState(VISIBLE);

  useEffect(() => {
    if (reduced()) return;
    const id = setInterval(() => setCount((c) => c + 1), 2400);
    return () => clearInterval(id);
  }, []);

  const rows = Array.from({ length: VISIBLE }, (_, i) => {
    const n = count - i;
    return { n, ...LEDGER[n % LEDGER.length], mins: i * 7 + 1 };
  });

  return (
    <figure className="ledger" aria-label="Example of an assistant's application log">
      <div className="ledger__head">
        <div>
          <p className="ledger__title">Applications for Sam Rivera</p>
          <p className="ledger__sub">Assistant: Neha. Senior product analyst roles.</p>
        </div>
        <p className="ledger__count">
          <strong>{count + 112}</strong> sent
        </p>
      </div>
      <ol className="ledger__rows" aria-live="off">
        {rows.map((r, i) => (
          <li key={r.n} className={i === 0 && count > VISIBLE ? 'ledger__row is-new' : 'ledger__row'}>
            <span className="ledger__co">{r.company}</span>
            <span className="ledger__role">{r.role}<em>{r.where}, resume {r.resume}</em></span>
            <span className="stamp">Sent {r.mins}m ago</span>
          </li>
        ))}
      </ol>
      <figcaption className="ledger__foot">Each row links to a screenshot of the submitted form.</figcaption>
    </figure>
  );
}
