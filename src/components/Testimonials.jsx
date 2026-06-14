import { useEffect, useState } from 'react';
import styles from './Testimonials.module.css';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonialsData[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className={`${styles.testimonials} section`}>
      <div className={styles.headingRow}>
        <span className={styles.sectionTag}>What guests say</span>
        <h2>Stories from our table.</h2>
      </div>

      <div className={styles.slider}>
        <div className={styles.reviewCard}>
          <div className={styles.avatarFrame}>
            <img src={current.avatar} alt={current.name} />
          </div>
          <div className={styles.reviewBody}>
            <div className={styles.rating}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={index < current.rating ? styles.starActive : styles.star}>
                  ★
                </span>
              ))}
            </div>
            <p>“{current.quote}”</p>
            <h4>{current.name}</h4>
            <small>{current.role}</small>
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className={styles.dots}>
            {testimonialsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
