import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';


const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navRef = useRef([]);
  const animationFrame = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });


useEffect(() => {
  let lastScrollY = window.scrollY;
  let lastTime = Date.now();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const currentTime = Date.now();

    const deltaY = currentScrollY - lastScrollY;
    const deltaTime = currentTime - lastTime;

    
    const velocity = Math.abs(deltaY / deltaTime);
    const goingDown = deltaY > 0;
    const fastScroll = velocity > 0.5;


    if (goingDown && fastScroll && currentScrollY > 80) {
  setHidden(true);
} 
else if (!goingDown || currentScrollY < 50) {
  setHidden(false);
}

    setScrolled(currentScrollY > 10);

    lastScrollY = currentScrollY;
    lastTime = currentTime;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);


  const handleMouseMove = (e) => {
  mouse.current = {
    x: e.clientX,
    y: e.clientY,
  };
};

const animateMagnet = () => {
   if (!mouse.current) return;

  navRef.current.forEach((el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const dx = mouse.current.x - (rect.left + rect.width / 2);
    const dy = mouse.current.y - (rect.top + rect.height / 2);

    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDistance = 120;

    if (distance < maxDistance) {
      const strength = 1 - distance / maxDistance;

      const moveX = dx * strength * 0.25;
      const moveY = dy * strength * 0.25;

      el.style.transform =
        `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.08})`;
    } else {
      el.style.transform = `translate(0px, 0px) scale(1)`;
    }

  });
       animationFrame.current = requestAnimationFrame(animateMagnet);
};
  
 useEffect(() => {
  animationFrame.current = requestAnimationFrame(animateMagnet);

  return () => cancelAnimationFrame(animationFrame.current);
}, []);

  const handleLink = () => setMenuOpen(false);

  return (
   <header
  className={`
    ${styles.header}
    ${scrolled ? styles.scrolled : ''}
    ${hidden ? styles.hidden : ''}
  `}
     onMouseMove={handleMouseMove}
>
      <div className={styles.navbar}>
        <a href="#home" className={styles.brand} aria-label="Go to homepage">
          Lolo Claro's Restaurant
        </a>

        {/* Mobile backdrop */}
        {menuOpen && (
          <div
            className={styles.backdrop}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

       <nav
         id="site-navigation"
         className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}
         aria-label="Primary navigation"
         
       >
          {/* Close button inside drawer */}
          <button
            type="button"
            className={styles.closeDrawer}
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>

          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              ref={(el) => (navRef.current[i] = el)}
              onClick={handleLink}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#reservation" className={styles.reserveButton} onClick={handleLink}>
            Reserve
          </a>

          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
