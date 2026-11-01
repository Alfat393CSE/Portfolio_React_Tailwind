import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links, sectionId } from "../../data/navigation";
import cv from "../../assets/documents/Alfat_Tasnim_Hasan_CV.pdf";
import { Download, Sun, Moon, Menu, X } from "lucide-react";
export default function Header({ route, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", scroll);
      observer.disconnect();
    };
  }, [route]);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1200) setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, []);
  const navLinks = links.map((label) => (
    <a
      key={label}
      href={`#${sectionId(label)}`}
      className={`nav-link ${active === sectionId(label) ? "active" : ""}`}
      aria-current={active === sectionId(label) ? "location" : undefined}
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </a>
  ));
return (      <header
        className={`site-header ${scrolled || menuOpen ? "scrolled" : ""}`}
      >
        <div className="nav-container">
          <a href="#home" className="brand" aria-label="Alfat home">
            <span className="brand-name">
              ALFAT<span>.</span>
            </span>
            <span className="brand-tagline">
              Software Developer | Research Explorer
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks}
          </nav>
          <div className="nav-actions">
            <a
              href={cv}
              download="Alfat_Tasnim_Hasan_CV.pdf"
              className="cv-button"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
            <button
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              id="menu-toggle"
              className="icon-button menu-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
          >
            {navLinks}
            <a
              className="mobile-cv"
              href={cv}
              download
              onClick={() => setMenuOpen(false)}
            >
              Download CV <Download size={16} />
            </a>
          </motion.nav>
        )}
      </header>
);
}
