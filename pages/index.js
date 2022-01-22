import Head from 'next/head';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { PokeCard } from '../components/PokeCard';

export default function Home({ pokemons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Next</title>
        <meta name='description' content='Pokemon app build with NextJS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.grid}>
          {pokemons.map((pokemon) => (
            <PokeCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const result = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${Math.floor(
      Math.random() * 500 + 1
    )}`
  );
  const jsonResult = await result.json();
  return {
    props: {
      pokemons: jsonResult.results,
    },
  };
}
