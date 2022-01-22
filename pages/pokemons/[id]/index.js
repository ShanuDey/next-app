import Head from 'next/head';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const pokemon = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Next</title>
        <meta name='description' content='Pokemon app build with NextJS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <Image
          src={pokemon.sprites.front_default}
          alt='Picture of the pokemon'
          width={100}
          height={100}
          unoptimized
        />
        <h3>Name: {pokemon.name}</h3>
        <p>
          Height: {pokemon.height}
          <br />
          Weight: {pokemon.weight}
        </p>
        <Link href='/'> &larr; Go back</Link>
      </main>
      <Footer />
    </div>
  );
};

export default pokemon;

export const getServerSideProps = async (context) => {
  const result = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.params.id}`
  );
  const jsonResult = await result.json();
  return {
    props: {
      pokemon: jsonResult,
    },
  };
};
