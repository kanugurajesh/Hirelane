import Sticker from './Sticker.jsx';

// Act 1. The wordmark fills the screen while the ribbon is already mid-stroke
// behind it. Pinned for a short hold: the word settles back a little and the
// stickers lift off at different rates, so the planes separate.
export default function Hero() {
  return (
    <section
      className="act hero"
      data-sc-act="pin"
      data-sc-span="1.7"
      data-ribbon="-0.1:0.17 0.28:0.27 0.62:0.15 0.96:0.33 0.72:0.6 0.34:0.78 0.24:0.97"
    >
      <div data-sc-stage className="hero__stage">
        <h1 className="hero__word" aria-label="Slush">
          <span aria-hidden="true">Slush</span>
        </h1>
        <div className="hero__foot">
          <p className="hero__line">The wallet for everything you do on Sui.</p>
          <a className="btn btn--filled" href="#get">Get Slush</a>
        </div>

        <Sticker name="rocket" className="hero__st hero__st--rocket" size="clamp(64px, 9vw, 136px)" r={-14} />
        <Sticker name="coin" className="hero__st hero__st--coin" size="clamp(56px, 8vw, 120px)" r={12} />
        <Sticker name="wallet" className="hero__st hero__st--wallet" size="clamp(64px, 9vw, 132px)" r={-8} />
        <Sticker name="star" className="hero__st hero__st--star" size="clamp(40px, 5vw, 80px)" r={10} />
      </div>
    </section>
  );
}
