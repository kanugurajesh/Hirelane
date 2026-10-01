import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap cta" id="call">
        <h2>Spend this week on interviews, not forms.</h2>
        <p className="lead">
          Book a free 20-minute call. We will look at your target roles and tell you honestly
          whether we can help.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--marker" href="#call">Book a free call</a>
          <a className="btn btn--ghost-dark" href="#pricing">See pricing</a>
        </div>
      </div>
      <div className="wrap footer__meta">
        <Logo />
        <nav aria-label="Footer" className="footer__links">
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#">Careers</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </nav>
        <p>© 2026 Hirelane, Inc.</p>
      </div>
    </footer>
  );
}
