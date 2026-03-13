import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export function Projects({ onSelect }) {
  return (
    <section className="m-section" style={{ background: "#f7f7f7" }}>
      <div className="m-inner">
        <p className="m-label">02 — Work</p>
        <h2 className="m-heading">
          Featured
          <br />
          <em>Projects</em>
        </h2>
        <div className="m-grid">
          {projects.map((p) => (
            <div key={p.id} className="m-card" onClick={() => onSelect(p)}>
              <div style={{ overflow: "hidden" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="m-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="m-card-body">
                <div className="m-card-cat">{p.category}</div>
                <div className="m-card-title">{p.title}</div>
                <div className="m-card-desc">{p.description}</div>
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
