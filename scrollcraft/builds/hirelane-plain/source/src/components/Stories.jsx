import { STORIES } from '../data.js';

export default function Stories() {
  return (
    <section className="section section--tint">
      <div className="wrap">
        <h2>Straight from client chats</h2>
        <p className="lead">Shared with permission. Last names shortened.</p>
        <div className="stories">
          {STORIES.map((s) => (
            <article key={s.name} className="story">
              <h3>{s.headline}</h3>
              <p className="story__who">{s.name}, {s.role}</p>
              <div className="chat">
                {s.messages.map((m, i) => (
                  <p key={i} className={`bubble bubble--${m.from}`}>{m.text}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
