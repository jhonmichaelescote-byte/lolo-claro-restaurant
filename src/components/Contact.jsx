import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className={styles.topRow}>
        <span className={styles.sectionTag}>Get in touch</span>
        <h2>Reach out for events or private dining.</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.infoPanel}>
          <div>
            <h3>Contact</h3>
            <address className={styles.address}>
              8Q6C+8P4, Governor's Dr, Naic, Calabarzon, Philippines
            </address>
          </div>
          <div>
            <h4>Phone</h4>
            <a href="tel:+639171234567">+63 919 506 1837</a>
          </div>
          <div>
            <h4>Messenger</h4>
            <a
              href="https://www.facebook.com/messages/t/loloclaros/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open Facebook Messenger in a new tab"
            >
              Lolo Claro's Restaurant
            </a>
          </div>
          <div>
            <h4>Opening Hours</h4>
            <p>Sunday       8:00 AM - 8:00 PM</p>
            <p>Monday       8:00 AM - 7:30 PM</p>
            <p>Tuesday      8:00 AM - 7:30 PM</p>
            <p>Wednesday    8:00 AM - 7:30 PM</p>
            <p>Thursday     8:00 AM - 7:30 PM</p>
            <p>Friday       8:00 AM - 8:00 PM</p>
            <p>Saturday     8:00 AM - 8:00 PM</p>
          </div>
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/loloclaros"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open Facebook page in a new tab"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className={styles.mapFrame}>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.0116720474116!2d120.76925307610618!3d14.310754586142036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339629954a403be3%3A0x4bd3d086a965c1de!2sLolo%20Claro&#39;s%20Restaurant!5e0!3m2!1sen!2sph!4v1781099616868!5m2!1sen!2sph"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
