const MESSAGES = [
  'Real people apply to jobs for you',
  'A tailored resume for every application',
  'Applied within 24 hours',
  'Screenshot proof of every application',
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
