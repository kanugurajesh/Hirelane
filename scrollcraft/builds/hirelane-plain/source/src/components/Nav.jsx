import Logo from './Logo.jsx';

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a href="#main" aria-label="Hirelane home"><Logo /></a>
        <nav aria-label="Primary" className="nav__links">
          <a href="#how">How it works</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn--primary btn--sm" href="#call">Book a free call</a>
      </div>
    </header>
  );
}
