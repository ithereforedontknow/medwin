export function About() {
  return (
    <section className="m-section" style={{ background: "#fff" }}>
      <div className="m-inner">
        <p className="m-label">01 — About</p>
        <div className="m-about-grid">
          <img
            src="assets/carousel2.jpg"
            alt="About"
            className="m-about-img"
            loading="lazy"
            decoding="async"
          />
          <div className="m-about-body">
            <div className="m-section-marker"></div>
            <h2 className="m-heading">
              The
              <br />
              <em>Journey</em>
            </h2>
            <p>
              I am a driven and dynamic model with a foundation in pageantry and
              a deep appreciation for the art of fashion. My journey into
              modeling is fueled by a desire to embody elegance, movement, and
              emotion — transforming vision into striking visual impact.
            </p>
            <p>
              Born and raised in La Union, Philippines, my journey began in
              college in 2024. What started as a personal challenge quickly
              became a passion, leading to multiple titles and growing
              recognition.
            </p>
            <p>
              Now, I'm focused on bringing brands to life — whether through
              print, digital campaigns, or live events. Adaptable, expressive,
              and easy to work with. Always prepared, always professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
