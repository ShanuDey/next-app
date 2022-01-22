import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://github.com/ShanuDey'
        target='_blank'
        rel='noopener noreferrer'
      >
        Made by Shanu Dey
      </a>
    </footer>
  );
};
