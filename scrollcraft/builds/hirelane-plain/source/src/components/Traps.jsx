import { TRAPS } from '../data.js';

export default function Traps() {
  return (
    <section className="section section--ink">
      <div className="wrap">
        <h2>Why a person beats an auto-apply bot</h2>
        <p className="lead">
          Auto-apply tools promise hundreds of applications a day. Recruiters can tell, and most
          big-company forms stop them cold.
        </p>
        <div className="traps" role="table" aria-label="Auto-apply bots compared with a Hirelane assistant">
          <div className="traps__row traps__row--head" role="row">
            <span role="columnheader">Auto-apply bots</span>
            <span role="columnheader">A Hirelane assistant</span>
          </div>
          {TRAPS.map((t) => (
            <div className="traps__row" role="row" key={t.bot}>
              <p role="cell" className="traps__bot"><s>{t.bot}</s></p>
              <p role="cell" className="traps__human">{t.human}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
