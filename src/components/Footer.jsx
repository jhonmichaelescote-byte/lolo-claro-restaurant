import styles from './Footer.module.css';
import facebookIcon from '../assets/facebook.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>Lolo Claro's Restaurant</p>
            <p className={styles.description}>Elegant dining with a modern Filipino twist, crafted for every occasion.</p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/loloclaros" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialIcon}>
                <img src={facebookIcon} alt="Facebook" className={styles.socialImg} />
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.heading}>Quick Links</h4>
            <a href="#home" className={styles.link}>Home</a>
            <a href="#menu" className={styles.link}>Menu</a>
            <a href="#reservation" className={styles.link}>Reservation</a>
          </div>

          <div>
            <h4 className={styles.heading}>Business Hours</h4>
            <p className={styles.hours}>Mon - Thurs<br />8:30 AM - 7:30 PM</p>
            <p className={styles.hours}>Fri - Sun<br />8:00 AM - 8:00 PM</p>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.copyright}>
          <span>© 2026 Lolo Claro's Restaurant. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
