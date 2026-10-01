import QrCode from './QrCode.jsx';

// Act 9. After all that volume, the smallest type on the page. Plain links in
// a sentence, the QR code for phones, and nothing moving.
export default function Close() {
  return (
    <footer className="close">
      <div className="close__inner">
        <p className="close__text">
          Slush is a wallet for the Sui network. Get it for <a href="#">Chrome</a>,{' '}
          <a href="#">iPhone</a> or <a href="#">Android</a>, or <a href="#">open the web app</a>.
          On a computer? Scan the code with your phone.
        </p>
        <div className="qr-card">
          <div className="qr-card__qr"><QrCode /></div>
          <div className="qr-card__label">Download</div>
        </div>
      </div>
      <div className="close__inner close__meta">
        <nav aria-label="Footer" className="close__links">
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">X</a>
          <a href="#">Discord</a>
        </nav>
        <p>© 2026 Slush</p>
      </div>
    </footer>
  );
}
