import { Menu, X } from "lucide-react";

export function Nav({ active, setActive, navOpen, setNavOpen }) {
  const links = ["Home", "About", "Projects", "Gallery", "Articles", "Contact"];
  return (
    <>
      <nav className="m-nav">
        <span className="m-nav-brand" onClick={() => setActive("Home")}>
          Medwin Doctolero
        </span>
        <div className="m-nav-links">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => setActive(l)}
              className={active === l ? "active" : ""}
            >
              {l}
            </button>
          ))}
        </div>
        <button className="m-nav-menu" onClick={() => setNavOpen(true)}>
          <Menu size={20} />
        </button>
      </nav>
      <div className={`m-drawer ${navOpen ? "open" : ""}`}>
        <button className="m-drawer-close" onClick={() => setNavOpen(false)}>
          <X size={24} />
        </button>
        <div className="m-drawer-links">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => {
                setActive(l);
                setNavOpen(false);
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
