import styles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to <a href='https://nextjs.org'>Pokemon Next</a>
      </h1>

      <p className={styles.description}>
        Get your favorite <code className={styles.code}>Next Pokemon</code>
      </p>
    </div>
  );
};
