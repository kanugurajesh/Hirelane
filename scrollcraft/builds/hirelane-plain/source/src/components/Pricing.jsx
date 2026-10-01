import { PLANS } from '../data.js';

export default function Pricing() {
  return (
    <section className="section section--tint" id="pricing">
      <div className="wrap">
        <h2>Pay once per search, not per month</h2>
        <p className="lead">
          Every plan starts with 25 free applications so you can check the quality first.
          Unused applications are refunded if you get hired early.
        </p>
        <div className="plans">
          {PLANS.map((p) => (
            <article key={p.name} className={p.featured ? 'plan plan--featured' : 'plan'}>
              {p.featured && <p className="plan__flag">Most clients pick this</p>}
              <h3>{p.name}</h3>
              <p className="plan__price"><span>$</span>{p.price}</p>
              <p className="plan__apps">
                {p.apps.toLocaleString()} applications, {p.pace}
              </p>
              <ul>
                {p.perks.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <a className={p.featured ? 'btn btn--primary' : 'btn btn--ghost'} href="#call">
                Start {p.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
