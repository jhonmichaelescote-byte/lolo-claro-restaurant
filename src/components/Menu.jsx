import styles from './Menu.module.css';
import { menuData } from '../data/menuData';

export default function Menu() {
  return (
    <section id="menu" className={`${styles.menu} section`}>
      <div className={styles.headingRow}>
        <span className={styles.sectionTag}>Featured Menu</span>
        <h2>Signature dishes crafted for every craving.</h2>
      </div>

      {menuData.map((category) => (
        <div key={category.category} className={styles.categoryBlock}>
          <h3>{category.category}</h3>
          <div className={styles.cardsWrap}>
            {category.items.map((item) => (
              <article key={item.id} className={styles.card}>
                <img src={item.image} alt={item.name} />
                <div className={styles.cardBody}>
                  <div className={styles.headerRow}>
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
