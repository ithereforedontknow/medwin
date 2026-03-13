export function Hero({ setActive }) {
  return (
    <section
      className="m-hero"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div className="m-hero-inner">
        <div>
          <p className="m-hero-eyebrow">Model · Creative · Storyteller</p>
          <h1 className="m-hero-title">
            Medwin
            <br />
            <em>Doctolero</em>
          </h1>
          <p className="m-hero-body">
            Born in La Union, raised in front of the lens. Emotion, elegance,
            and intention — every frame.
          </p>
          <div className="m-hero-meta">
            <div>
              <div className="m-hero-stat-num">2024</div>
              <div className="m-hero-stat-label">Started</div>
            </div>
            <div>
              <div className="m-hero-stat-num">La Union</div>
              <div className="m-hero-stat-label">Based In</div>
            </div>
            <div>
              <div className="m-hero-stat-num">PH</div>
              <div className="m-hero-stat-label">Philippines</div>
            </div>
          </div>
        </div>
        <img
          src="assets/carousel1.jpg"
          alt="Medwin Doctolero"
          className="m-hero-img"
          fetchPriority="high"
          loading="eager"
        />
      </div>
    </section>
  );
}
