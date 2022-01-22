import Head from 'next/head';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { PokeList } from '../components/PokeList';

export default function Home({ pokemons }) {
  console.log(pokemons);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Next</title>
        <meta name='description' content='Pokemon app build with NextJS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <PokeList />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  console.log('I am get Static Props');
  const result = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${Math.floor(
      Math.random() * 500 + 1
    )}`
  );
  console.log(result);
  const pokemons = await result.json();
  return {
    props: {
      pokemons,
    },
  };
}
