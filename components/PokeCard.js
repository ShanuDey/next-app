import Link from 'next/link';
import styles from '../styles/Card.module.css';

export const PokeCard = () => {
  return (
    <Link href='/'>
      <a className={styles.card}>
        <h2>Pikachu &rarr;</h2>
        <p>Learn more about Pikachu</p>
      </a>
    </Link>
  );
};
