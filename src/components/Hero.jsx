import heroImage from '../assets/lolo.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section
      id="home"
      className={`${styles.hero} section`}
      style={{
        backgroundImage: `linear-gradient(180deg, var(--hero-overlay-top), var(--hero-overlay-bottom)), url(${heroImage})`
      }}
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      <div className={styles.overlay} />
      <div className={styles.heroContent}>
        <span className={styles.tag}>Modern Filipino dining</span>
        <h1 id="hero-heading">Savor bold flavors and warm hospitality.</h1>
        <p id="hero-description">Seasonal ingredients, crafted with care for a memorable table experience.</p>
        <div className={styles.ctaGroup}>
          <a className={styles.primaryButton} href="#reservation">Book a table</a>
          <a className={styles.secondaryButton} href="#menu">Explore menu</a>
        </div>
      </div>

      <div className={styles.heroDetails}>
        <div className={styles.detailCard}>
          <span>Authentic recipes</span>
          <strong>Handcrafted daily</strong>
        </div>
        <div className={styles.detailCard}>
          <span>Private dining</span>
          <strong>Events & celebrations</strong>
        </div>
      </div>

      <a href="#about" className={styles.scrollPrompt} aria-label="Scroll down to About section">
        <span />
        <small>Scroll</small>
      </a>
    </section>
  );
}
