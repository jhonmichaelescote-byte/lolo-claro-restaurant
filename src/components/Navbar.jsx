import { useState } from 'react';
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

  const handleLink = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <a href="#home" className={styles.brand} aria-label="Restaurant logo">
          Lolo Claro's Restaurant
        </a>

        <nav
          id="site-navigation"
          className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink} onClick={handleLink}>
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
            aria-label="Toggle theme"
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
