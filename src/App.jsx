import { useState, useEffect } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      {/* NAV */}
      <nav>
        <Link to="/" className="nav-logo">LAUNCH LAB</Link>
        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }}>Services</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }}>Pricing</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }}>Contact</a></li>
        </ul>
      </nav>

      {/* PAGE CONTENT */}
      <Outlet />

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">LAUNCH LAB</div>
        <div className="footer-copy">© 2025 Launch Lab. Your Complete Business Partner.</div>
      </footer>
    </>
  )
}

export default App
