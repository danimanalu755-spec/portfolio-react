import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useEffect, useRef, useState } from 'react'
import './App.css'

function Reveal({ children, className = '' }) {
  const [visible, setVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return;
    try {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) { 
          setVisible(true); 
          observer.disconnect(); 
        }
      }, { threshold: 0.1 });

      observer.observe(elementRef.current);
      return () => observer.disconnect();
    } catch (error) {
      setVisible(true);
    }
  }, []);

  return (
    <div ref={elementRef} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  
  // Tautan dasar ke profil GitHub asli kamu
  const gitLink = "https://github.com"; 

  // Tautan Obrolan WhatsApp Langsung (Hardcoded & Aman dari Error Gateway)
  const waNumber = "6285260277250";
  const textRaw = "Halo Dani, saya melihat portofolio kamu dan tertarik untuk bekerja sama.";
  const waLink = `https://wa.me`;

  // Tautan Live Demo Utama Anda di Vercel
  const demoLink = "https://vercel.app";

  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme');
      return savedTheme ? savedTheme : 'dark';
    } catch (e) {
      return 'dark';
    }
  });


  useEffect(() => {
    try {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('portfolio-theme', theme);
    } catch (e) {
      console.error("Gagal menyimpan tema:", e);
    }
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
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          <div className="nav-actions">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <FaSun color="#F59E0B" /> : <FaMoon />}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Navigation">
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
            <div className="skill-icon">
              <FaHtml5 color={theme === 'dark' ? 'var(--accent)' : '#E34F26'} size="40px" />
            </div>
            <h3>HTML</h3><p>Struktur website</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon">
              <FaCss3Alt color={theme === 'dark' ? 'var(--accent)' : '#1572B6'} size="40px" />
            </div>
            <h3>CSS</h3><p>Responsive design</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon">
              <FaJsSquare color={theme === 'dark' ? 'var(--accent)' : '#F7DF1E'} size="40px" />
            </div>
            <h3>JavaScript</h3><p>Logika website</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon">
              <FaReact color={theme === 'dark' ? 'var(--accent)' : '#61DAFB'} size="40px" />
            </div>
            <h3>React JS</h3><p>Aplikasi web modern</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon">
              <FaGitAlt color={theme === 'dark' ? 'var(--accent)' : '#F05032'} size="40px" />
            </div>
            <h3>Git</h3><p>Version control</p>
          </Reveal>
          <Reveal className="skill-card">
            <div className="skill-icon">
              <FaGithub color={theme === 'dark' ? 'var(--accent)' : '#181717'} size="40px" />
            </div>
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
          
          {/* PROJECT 1 */}
          <Reveal className="project-card">
            <div className="project-image"><img src="/projects/portfolio.jpg" alt="Personal Portfolio" /></div>
            <div className="project-content">
              <h3>Personal Portfolio</h3>
              <p>Website portofolio responsif dengan animasi scroll interaktif modern (Reveal Effect).</p>
              <div className="project-tech"><span>React</span><span>JavaScript</span><span>CSS3</span></div>
              <div className="project-buttons">
                <a href={demoLink} target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                <a href={`${gitLink}/portfolio-react`} target="_blank" rel="noreferrer" className="btn secondary">GitHub</a>
              </div>
            </div>
          </Reveal>

          {/* PROJECT 2 */}
          <Reveal className="project-card">
            <div className="project-image"><img src="/projects/repair.jpg" alt="Repair Service Website" /></div>
            <div className="project-content">
              <h3>Repair Service Website</h3>
              <p>Platform solusi digital layanan perbaikan. Dioptimalkan menggunakan Tailwind CSS.</p>
              <div className="project-tech"><span>React</span><span>Tailwind</span></div>
              <div className="project-buttons">
                <a href={demoLink} target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                <a href={gitLink} target="_blank" rel="noreferrer" className="btn secondary">GitHub</a>
              </div>
            </div>
          </Reveal>

          {/* PROJECT 3 */}
          <Reveal className="project-card">
            <div className="project-image"><img src="/projects/ecommerce.jpg" alt="Digital Product Catalog" /></div>
            <div className="project-content">
              <h3>Digital Product Catalog</h3>
              <p>Platform katalog produk modern dengan fitur pencarian dan filter kategori instan.</p>
              <div className="project-tech"><span>React JS</span><span>Context API</span></div>
              <div className="project-buttons">
                <a href={demoLink} target="_blank" rel="noreferrer" className="btn primary">Live Demo</a>
                <a href={gitLink} target="_blank" rel="noreferrer" className="btn secondary">GitHub</a>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION (TIMELINE VERTIKAL ESTETIK) */}
      <section id="experience" className="section">
        <Reveal>
          <h2>Experience & Education</h2>
          <p className="section-intro">Riwayat pendidikan dan pengalaman kerja profesional yang telah saya lalui.</p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginTop: '40px' }}>
          
          {/* KOLOM PENGALAMAN KERJA */}
          <div>
            <h3 className="timeline-section-title">💼 Pengalaman Kerja</h3>
            <div className="timeline-container">
              
              {/* ITEM KERJA 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>IT Support</h4>
                  <p className="timeline-meta">RSU MITRA MEDIKA AMPLAS MEDAN | 2023 - Sekarang</p>
                  <ul style={{ margin: '5px 0 0 0', paddingLeft: '18px', fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.6' }}>
                    <li>Sebagai administrator SIMRS</li>
                    <li>Services Desk Technician</li>
                    <li>Mengembangkan konsep proyek dan menjaga alur kerja yang optimal</li>
                  </ul>
                </div>
              </div>

              {/* ITEM KERJA 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>STAFF IT</h4>
                  <p className="timeline-meta">PT. INOCYCLE TECHNOLOGY GROUP .Tbk | 2021 - 2022</p>
                  <p className="timeline-desc">
                    Menjadi IT support menangani segala trouble jaringan, perangkat keras dan lunak komputer, serta memastikan semua kebutuhan user terpenuhi.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* KOLOM RIWAYAT PENDIDIKAN */}
          <div>
            <h3 className="timeline-section-title">🎓 Riwayat Pendidikan</h3>
            <div className="timeline-container">
              
              {/* ITEM PENDIDIKAN 1 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>S1 Teknik Informatika</h4>
                  <p className="timeline-meta">STMIK BUDI DARMA MEDAN | 2013 - 2017</p>
                  <p className="timeline-desc">
                    Lulus dengan IPK 3.38. Aktif dalam Organisasi Pemrograman web club dan Organisasi Microcontroller 
                    Club. Saya juga menjadi wakil ketua dalam satu organisasi mahasiswa Kristen yaitu KMK (Keluarga Mahasiswa Kristen) di kampus saya.
                  </p>
                </div>
              </div>

              {/* ITEM PENDIDIKAN 2 */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>IPA II</h4>
                  <p className="timeline-meta">SMA N 1 BARUS | 2009 - 2012</p>
                  <p className="timeline-desc">
                    Mempelajari ilmu komputer masih pengenalan dasar.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>



      {/* CONTACT */}
      <section id="contact" className="section">
        <Reveal>
          <h2>Hubungi Saya</h2>
          <p className="section-intro">Silakan hubungi saya untuk kolaborasi atau sekadar menyapa!</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginTop: '30px' }}>
            <p><FaEnvelope color="var(--accent)" /> <a href="mailto:danimanalu755@gmail.com" style={{ textDecoration: 'underline' }}>danimanalu755@gmail.com</a></p>
            <p><FaPhone color="var(--accent)" /> <a href={waLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>+62 852-6027-7250</a></p>
            <p><FaMapMarkerAlt color="#E34F26" /> <span>Sumatera Utara, Indonesia</span></p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

export default App