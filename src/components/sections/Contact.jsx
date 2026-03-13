import { Facebook, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section className="m-section" style={{ background: "#fff" }}>
      <div className="m-inner">
        <p className="m-label">05 — Connect</p>
        <div className="m-contact-grid">
          <div>
            <h2 className="m-contact-large">
              Let's
              <br />
              work
              <br />
              <em>together.</em>
            </h2>
            <div className="m-social-row">
              <a
                href="http://www.facebook.com/medwindoctolero"
                target="_blank"
                rel="noopener noreferrer"
                className="m-social-btn"
              >
                <Facebook size={14} /> Facebook
              </a>
              <a
                href="https://www.instagram.com/medzzs_"
                target="_blank"
                rel="noopener noreferrer"
                className="m-social-btn"
              >
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>
          <div>
            <div className="m-contact-item">
              <div className="m-contact-label">Location</div>
              <div className="m-contact-val">
                Agoo, La Union
                <br />
                Philippines
              </div>
            </div>
            <div className="m-contact-item">
              <div className="m-contact-label">Phone</div>
              <div className="m-contact-val">
                +63 909 007 3727
                <br />
                <span style={{ fontSize: "12px", color: "#aaa" }}>
                  Mon–Sat, 9am–6pm
                </span>
              </div>
            </div>
            <div className="m-contact-item">
              <div className="m-contact-label">Email</div>
              <div className="m-contact-val">
                <a
                  href="mailto:mdzdoctolero@gmail.com"
                  className="m-contact-link"
                >
                  mdzdoctolero@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
