import { useState, useRef } from "react";
import { DetailOverlay } from "./components/layout/DetailOverlay";
import { Footer } from "./components/layout/Footer";
import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Gallery } from "./components/sections/Gallery";
import { Articles } from "./components/sections/Articles";
import { Contact } from "./components/sections/Contact";

export default function App() {
  const [active, setActive] = useState("Home");
  const [navOpen, setNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Gallery: useRef(null),
    Articles: useRef(null),
    Contact: useRef(null),
  };
  // useEffect(() => {
  //   injectStyles();
  // }, []);

  const handleNav = (section) => {
    setActive(section);
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div style={{ background: "#fff" }}>
      <Nav
        active={active}
        setActive={handleNav}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      <div ref={sectionRefs.Home}>
        <Hero setActive={handleNav} />
      </div>
      <div ref={sectionRefs.About}>
        <About />
      </div>
      <div ref={sectionRefs.Projects}>
        <Projects onSelect={setSelectedProject} />
      </div>
      <div ref={sectionRefs.Gallery}>
        <Gallery />
      </div>
      <div ref={sectionRefs.Articles}>
        <Articles onSelect={setSelectedArticle} />
      </div>
      <div ref={sectionRefs.Contact}>
        <Contact />
      </div>
      <Footer />

      <DetailOverlay
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        tags={["Editorial", "Fashion", "2025"]}
      />
      <DetailOverlay
        item={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        tags={["Personal", "Story", "2025"]}
      />
    </div>
  );
}
