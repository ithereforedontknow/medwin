import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

export function DetailOverlay({ item, onClose, tags }) {
  const open = item !== null;
  useEffect(() => {
    if (open) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
    }

    const handler = (e) => {
      if (e.key === "escape") onclose();
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
      // Ensure scrolling is restored if the component unmounts
      document.body.style.overflow = "";
    };
  }, [open, onclose]); // Added 'open' to the dependency array

  return (
    <div className={`m-overlay ${open ? "open" : ""}`}>
      {item && (
        <div className="m-overlay-inner">
          <button className="m-overlay-back" onClick={onClose}>
            <ChevronLeft size={14} /> Back
          </button>
          <img src={item.image} alt={item.title} className="m-overlay-img" />
          <div className="m-overlay-cat">{item.category}</div>
          <h1 className="m-overlay-title">{item.title}</h1>
          <p className="m-overlay-body">
            {item.fullDescription || item.description}
          </p>
          <div className="m-overlay-tags">
            {tags.map((t) => (
              <span key={t} className="m-overlay-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
