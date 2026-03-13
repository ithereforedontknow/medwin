import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "../../data/gallery";
import { useState, useEffect } from "react";
export function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const prev = () =>
    setCurrent((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setCurrent((i) => (i + 1) % galleryImages.length);

  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === "ArrowLeft")
        setLightbox(
          (i) => (i - 1 + galleryImages.length) % galleryImages.length,
        );
      if (e.key === "ArrowRight")
        setLightbox((i) => (i + 1) % galleryImages.length);
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <section className="m-section" style={{ background: "#fff" }}>
      <div className="m-inner">
        <p className="m-label">03 — Gallery</p>
        <h2 className="m-heading">
          Visual
          <br />
          <em>Diary</em>
        </h2>

        <div className="m-gallery-main" onClick={() => setLightbox(current)}>
          <img src={galleryImages[current]} alt="gallery" />
          <button
            className="m-gallery-nav left"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="m-gallery-nav right"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="m-gallery-thumbs">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`m-gallery-thumb ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <p className="m-gallery-count">
          {current + 1} / {galleryImages.length}
        </p>
      </div>

      {lightbox !== null && (
        <div className="m-lightbox">
          <img src={galleryImages[lightbox]} alt="enlarged" />
          <button
            className="m-lightbox-nav left"
            onClick={() =>
              setLightbox(
                (i) => (i - 1 + galleryImages.length) % galleryImages.length,
              )
            }
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="m-lightbox-nav right"
            onClick={() => setLightbox((i) => (i + 1) % galleryImages.length)}
          >
            <ChevronRight size={32} />
          </button>
          <button
            className="m-lightbox-close"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <span className="m-lightbox-counter">
            {lightbox + 1} / {galleryImages.length}
          </span>
        </div>
      )}
    </section>
  );
}
