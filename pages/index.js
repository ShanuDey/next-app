import Head from 'next/head';
import { Footer } from '../components/Footer';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { PokeCard } from '../components/PokeCard';

export default function Home() {
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
          <PokeCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
