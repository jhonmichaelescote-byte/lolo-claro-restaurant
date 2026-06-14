import { useEffect, useRef, useState } from 'react';
import styles from './Gallery.module.css';
import { galleryData } from '../data/galleryData';

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!selected) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  return (
    <section id="gallery" className={`${styles.gallery} section`}>
      <div className={styles.topRow}>
        <span className={styles.sectionTag}>Our space & cuisine</span>
        <h2>Gallery of moments and craft.</h2>
      </div>

      <div className={styles.grid}>
        {galleryData.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.card}
            onClick={() => setSelected(item)}
            aria-label={`View ${item.title} in lightbox`}
          >
            <img src={item.image} alt={item.title} />
            <div className={styles.cardOverlay}>
              <p>{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          aria-describedby="lightbox-description"
        >
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close gallery lightbox"
          >
            Close
          </button>
          <img src={selected.image} alt={selected.title} />
          <p id="lightbox-description">{selected.title}</p>
        </div>
      )}
    </section>
  );
}
