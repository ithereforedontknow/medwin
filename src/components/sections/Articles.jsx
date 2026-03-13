import { ArrowUpRight } from "lucide-react";
import { articles } from "../../data/articles";
export function Articles({ onSelect }) {
  return (
    <section className="m-section" style={{ background: "#f7f7f7" }}>
      <div className="m-inner">
        <p className="m-label">04 — Stories</p>
        <h2 className="m-heading">
          Articles &amp;
          <br />
          <em>Experiences</em>
        </h2>
        <div className="m-grid">
          {articles.map((a) => (
            <div key={a.id} className="m-card" onClick={() => onSelect(a)}>
              <div style={{ overflow: "hidden" }}>
                <img
                  src={a.image}
                  alt={a.title}
                  className="m-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="m-card-body">
                <div className="m-card-cat">{a.category}</div>
                <div className="m-card-title">{a.title}</div>
                <div className="m-card-desc">{a.description}</div>
              </div>
              <div className="m-card-arrow">
                <ArrowUpRight size={14} color="#fff" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
