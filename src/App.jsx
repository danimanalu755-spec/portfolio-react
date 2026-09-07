import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useEffect, useRef, useState } from 'react'
import './App.css'

function Reveal({ children, className = '' }) {
  const [visible, setVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 })
    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const gitLink = "https://github.com";

  const waNumber = "628512345667"; 
  const waMessage = encodeURIComponent("Halo Dani, saya tertarik untuk bekerja sama.");
  const waLink = `https://wa.me{waNumber}?text=${waMessage}`;

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Dani Frandi Manalu</h2>
        <div className="nav-container">
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          <div className="nav-actions">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-toggle">
              {theme === 'dark' ? <FaSun color="#F59E0B" /> : <FaMoon />}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <Reveal className="hero-text">
          <p className="hello">Hai, Perkenalkan Saya</p>
          <h1>Dani Frandi Manalu</h1>
          <h2>Junior Web Developer React</h2>
          <p className="description">Saya sedang membangun kemampuan dalam pengembangan website menggunakan React, JavaScript, HTML, dan CSS.</p>
          <div className="buttons">
            <a href="#projects" className="btn primary">Lihat Project</a>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn secondary">Hubungi Saya</a>
          </div>
        </Reveal>
        <Reveal className="hero-image">
          <img src="/profile.jpg" alt="Foto Dani Manalu" />
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <Reveal>
          <h2>Tentang Saya</h2>
          <p>Saya adalah Junior Web Developer yang sedang fokus mempelajari React dan pengembangan website modern. Saya senang membuat website yang sederhana, responsive, dan mudah digunakan.</p>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <Reveal>
          <h2>Keahlian Saya</h2>
          <p className="section-intro">Teknologi yang sedang saya pelajari dan gunakan dalam pengembangan website.</p>
        </Reveal>
        <div className="skills">
          <Reveal className="skill-card">
            <div className="skill-icon"><FaHtml5 color={theme === 'dark' ? 'var(--accent)' : '#E34F26'} size="40px" /></div>
            <h3>HTML</h3><p>Struktur website</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon"><FaCss3Alt color={theme === 'dark' ? 'var(--accent)' : '#1572B6'} size="40px" /></div>
            <h3>CSS</h3><p>Responsive design</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon"><FaJsSquare color={theme === 'dark' ? 'var(--accent)' : '#F7DF1E'} size="40px" /></div>
            <h3>JavaScript</h3><p>Logika website</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon"><FaReact color={theme === 'dark' ? 'var(--accent)' : '#61DAFB'} size="40px" /></div>
            <h3>React JS</h3><p>Aplikasi web modern</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon"><FaGitAlt color={theme === 'dark' ? 'var(--accent)' : '#F05032'} size="40px" /></div>
            <h3>Git</h3><p>Version control</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon"><FaGithub color={theme === 'dark' ? 'var(--accent)' : '#181717'} size="40px" /></div>
            <h3>GitHub</h3><p>Kelola project</p>
          </Reveal>
        </div>
      </section>

            {/* PROJECTS */}
      <section id="projects" className="section">
        <Reveal>
          <h2>My Projects</h2>
          <p className="section-intro">Beberapa project yang saya buat selama belajar web development.</p>
        </Reveal>
        <div className="projects">
          
          {/* PROJECT 1: Personal Portfolio */}
          <Reveal className="project-card">
            <div className="project-image"><img src="/projects/portfolio.jpg" alt="Personal Portfolio" /></div>
            <div className="project-content">
              <h3>Personal Portfolio</h3>
              <p>Website portofolio responsif dengan animasi scroll interaktif modern (Reveal Effect).</p>
              <div className="project-tech"><span>React</span><span>JavaScript</span><span>CSS3</span></div>
              <div className="project-buttons">
                {/* GANTI DI SINI: Masukkan URL website portfolio kamu yang sudah online */}
                <a href="https://vercel.app" target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                <a href={gitLink} target="_blank" rel="noreferrer" className="btn secondary">GitHub</a>
              </div>
            </div>
          </Reveal>

          {/* PROJECT 2: Repair Service Website */}
          <Reveal className="project-card">
            <div className="project-image"><img src="/projects/repair.jpg" alt="Repair Service Website" /></div>
            <div className="project-content">
              <h3>Repair Service Website</h3>
              <p>Platform solusi digital layanan perbaikan. Dioptimalkan menggunakan Tailwind CSS.</p>
              <div className="project-tech"><span>React</span><span>Tailwind</span></div>
              <div className="project-buttons">
                {/* GANTI DI SINI: Masukkan URL website project repair service kamu */}
                <a href="https://vercel.app" target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                <a href={gitLink} target="_blank" rel="noreferrer" className="btn secondary">GitHub</a>
              </div>
            </div>
          </Reveal>

          {/* PROJECT 3: Digital Product Catalog */}
          <Reveal className="project-card">
            <div className="project-image"><img src="/projects/ecommerce.jpg" alt="Digital Product Catalog" /></div>
            <div className="project-content">
              <h3>Digital Product Catalog</h3>
              <p>Platform katalog produk modern dengan fitur pencarian dan filter kategori instan.</p>
              <div className="project-tech"><span>React JS</span><span>Context API</span></div>
              <div className="project-buttons">
                {/* GANTI DI SINI: Masukkan URL website katalog produk kamu */}
                <a href="https://vercel.app" target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                <a href={gitLink} target="_blank" rel="noreferrer" className="btn secondary">GitHub</a>
              </div>
            </div>
          </Reveal>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="section">
        <Reveal>
          <h2>Hubungi Saya</h2>
          <p className="section-intro">Silakan hubungi saya untuk kolaborasi atau sekadar menyapa!</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginTop: '30px' }}>
            <p><FaEnvelope color="var(--accent)" /> <a href="mailto:danimanalu755@gmail.com" style={{ textDecoration: 'underline' }}>danimanalu755@gmail.com</a></p>
            <p><FaPhone color="var(--accent)" /> <a href={waLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>+62 851-2345-667</a></p>
            <p><FaMapMarkerAlt color="#E34F26" /> <span>Sumatera Utara, Indonesia</span></p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

export default App
