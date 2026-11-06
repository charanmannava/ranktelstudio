import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage, CareersPage, ContactPage, OpportunitiesPage, TeamPage } from "./pages/StudioPages";
import { VampAIPage } from "./pages/VampAIPage";

function BrandMark() {
  return (
    <Link className="brand" to="/" aria-label="Ranktel Studio home">
      <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-name">RANKTEL<span>STUDIO</span></span>
    </Link>
  );
}

function VampHeader({ menuOpen, closeMenu, toggleMenu }: { menuOpen: boolean; closeMenu: () => void; toggleMenu: () => void }) {
  return (
    <header className="vamp-site-header">
      <div className="vamp-nav-inner">
        <Link className="vamp-brand" to="/vampai" aria-label="vampAI home" onClick={closeMenu}>
          <span className="vamp-brand-icon">V</span><span>VAMP <b>AI</b></span>
        </Link>
        <button
          className="menu-toggle vamp-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close vampAI navigation" : "Open vampAI navigation"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "vamp-nav is-open" : "vamp-nav"} aria-label="vampAI navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#models" onClick={closeMenu}>Models</a>
          <a href="#playground" onClick={closeMenu}>Playground</a>
          <a href="#docs" onClick={closeMenu}>Docs</a>
          <Link className="vamp-studio-link" to="/" onClick={closeMenu}>
            Ranktel Studio <span aria-hidden="true">↗</span>
          </Link>
          <a className="vamp-access-link" href="mailto:harsha@ranktelstudio.com?subject=vampAI%20early%20access" onClick={closeMenu}>
            Get access <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);
  const isVampPage = location.pathname === "/vampai";

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      "/": "Ranktel Studio — Dream It. Build It. Rank It.",
      "/about": "About — Ranktel Studio",
      "/team": "Founding Team — Ranktel Studio",
      "/careers": "Careers — Ranktel Studio",
      "/contact": "Contact — Ranktel Studio",
      "/opportunities": "Business Opportunities — Ranktel Studio",
      "/vampai": "vampAI — Ranktel Studio",
    };
    const pageTitle = pageTitles[location.pathname] ?? "Ranktel Studio";
    document.title = pageTitle;
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {isVampPage ? (
        <VampHeader menuOpen={menuOpen} closeMenu={closeMenu} toggleMenu={() => setMenuOpen(!menuOpen)} />
      ) : (
        <header className="site-header">
          <div className="header-inner">
            <BrandMark />
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span />
            </button>
            <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
              <NavLink to="/#games" onClick={closeMenu}>Games</NavLink>
              <NavLink to="/vampai" onClick={closeMenu}>vampAI</NavLink>
              <NavLink to="/team" onClick={closeMenu}>Team</NavLink>
              <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              <Link className="nav-cta" to="/opportunities" onClick={closeMenu}>
                Collaborate <span aria-hidden="true">↗</span>
              </Link>
            </nav>
          </div>
        </header>
      )}

      <main key={location.pathname}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <BrandMark />
            <p>DREAM IT.<br />BUILD IT.<br />RANK IT.</p>
          </div>
          <div className="footer-links">
            <div><span>STUDIO</span><Link to="/about">About us</Link><Link to="/team">Founding team</Link><Link to="/careers">Careers</Link></div>
            <div><span>EXPLORE</span><Link to="/#games">Our games</Link><Link to="/about#cricket-story">Upcoming cricket game</Link><Link to="/vampai">vampAI</Link></div>
            <div><span>CONNECT</span><Link to="/contact">Contact</Link><Link to="/opportunities">Business opportunities</Link><a href="mailto:harsha@ranktelstudio.com">Email Founder ↗</a></div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} RANKTEL STUDIO</span>
            <Link to="/">BACK TO TOP ↑</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="opportunities" element={<OpportunitiesPage />} />
          <Route path="vampai" element={<VampAIPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
