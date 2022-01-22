import Link from 'next/link';
import styles from '../styles/Card.module.css';

export const PokeCard = ({ pokemon }) => {
  const id = pokemon.url.split('pokemon/')[1];
  return (
    <Link href={`/pokemons/${id}`}>
      <a className={styles.card}>
        <h2>{pokemon.name} &rarr;</h2>
        <p>Learn more about {pokemon.name}</p>
      </a>
    </Link>
  );
};
