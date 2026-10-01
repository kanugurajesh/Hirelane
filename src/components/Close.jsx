import QrCode from './QrCode.jsx';

// Act 9. After all that volume, the smallest type on the page. Plain links in
// a sentence, the QR code for phones, and nothing moving.
export default function Close() {
  return (
    <footer className="close">
      <div className="close__inner">
        <p className="close__text">
          Hirelane is a job application service: real assistants apply to jobs for you.{' '}
          <a href="#">Start free</a>, <a href="#">see pricing</a> or <a href="#">book a call</a>.
          On a computer? Scan the code with your phone.
        </p>
        <div className="qr-card">
          <div className="qr-card__qr"><QrCode /></div>
          <div className="qr-card__label">Book a call</div>
        </div>
      </div>
      <div className="close__inner close__meta">
        <nav aria-label="Footer" className="close__links">
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">LinkedIn</a>
          <a href="#">Careers</a>
        </nav>
        <p>© 2026 Hirelane</p>
      </div>
    </footer>
  );
}
