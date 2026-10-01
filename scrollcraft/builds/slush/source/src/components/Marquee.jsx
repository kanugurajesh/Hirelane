const MESSAGES = [
  'Send to a name, not an address',
  'Sign in with Google',
  'Swap any coin on Sui',
  'Stake SUI from your wallet',
];

export default function Marquee() {
  // The track is rendered twice so the -50% loop is seamless.
  const run = (hidden) =>
    MESSAGES.flatMap((msg, i) => [
      <span key={`${hidden}-m${i}`} aria-hidden={hidden || undefined}>{msg}</span>,
      <span key={`${hidden}-s${i}`} aria-hidden="true">✦</span>,
    ]);

  return (
    <div className="marquee" role="region" aria-label="Announcement">
      <div className="marquee__track">
        {run(false)}
        {run(true)}
      </div>
    </div>
  );
}
