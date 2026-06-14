import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.pageYOffset > 520);
      setShowStickyCTA(window.pageYOffset > 880);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`page-loader ${pageLoaded ? 'loaded' : ''}`}>
        <div className="loader-ring" aria-hidden="true" />
      </div>
      <div className="app-shell">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main id="main-content" className="app-main">
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Testimonials />
          <Reservation />
          <Contact />
        </main>

        <Footer />

        {showTop && (
          <button
            type="button"
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}

        {showStickyCTA && (
          <a
            href="#reservation"
            className="sticky-cta"
            aria-label="Reserve a table now"
          >
            Reserve Now
          </a>
        )}
      </div>
    </>
  );
}

export default App;
