import Ledger from './Ledger.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1>Hand your job applications to a person who does them properly.</h1>
          <p className="lead">
            Your Hirelane assistant applies to the jobs you choose, with a resume and cover letter
            tailored to each one, within 24 hours. You get your evenings back for networking and
            interview prep.
          </p>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#pricing">Start with 25 free applications</a>
            <a className="btn btn--ghost" href="#call">Book a strategy call</a>
          </div>
          <p className="hero__proof">
            <span className="stars" aria-hidden="true">★★★★★</span>
            Rated 4.9 from 1,240 reviews. 3,100 job seekers placed since 2023.
          </p>
        </div>
        <Ledger />
      </div>
    </section>
  );
}
