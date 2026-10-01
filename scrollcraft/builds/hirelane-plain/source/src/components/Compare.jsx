import { COMPARE } from '../data.js';

const MARK = { yes: 'Yes', no: 'No', partial: 'Partly', slow: 'Slowly' };

export default function Compare() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>How Hirelane compares</h2>
        <div className="compare" tabIndex={0} role="region" aria-label="Comparison table">
          <table>
            <thead>
              <tr>
                <th scope="col"><span className="sr">Feature</span></th>
                {COMPARE.cols.map((c, i) => (
                  <th scope="col" key={c} className={i === 0 ? 'is-us' : undefined}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.rows.map(([label, ...cells]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {cells.map((v, i) => (
                    <td key={i} className={`${i === 0 ? 'is-us ' : ''}v-${MARK[v] ? v : 'text'}`}>
                      {MARK[v] ?? v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
