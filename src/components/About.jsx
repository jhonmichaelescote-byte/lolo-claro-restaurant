import styles from './About.module.css';
import heroImage from '../assets/kitchen.jpg';

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className={styles.contentGrid}>
        <div className={styles.visual}> 
          <div className={styles.imageFrame}>
            <img
              src={heroImage}
              alt="Chef preparing a signature dish"
            />
          </div>
        </div>
        <div className={styles.copy}>
          <span className={styles.sectionTag}>About the restaurant</span>
          <h2>Crafting bold flavors with timeless hospitality.</h2>
          <p>
            Filipino cuisine is served at this restaurant. It's time to try tasty fried chicken, kare-kare and lumpia. Good leche flans and perfectly cooked halo-halo will impress you at the first bite.
          </p>
          <div className={styles.values}> 
            <div>
              <h3>Chef&apos;s Philosophy</h3>
              <p>Food should be bold, honest, and perfectly balanced to create unforgettable moments.</p>
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>Deliver exceptional hospitality, creative cuisine, and a welcoming atmosphere every evening.</p>
            </div>
          </div>

          <div className={styles.whyChoose}>
            <h3>Why choose us?</h3>
            <ul>
              <li>Authentic Filipino recipes with a modern twist</li>
              <li>Fresh ingredients sourced daily</li>
              <li>Warm, attentive service in a cozy setting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
