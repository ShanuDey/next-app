import { PokeCard } from '../components/PokeCard';
import styles from '../styles/PokeList.module.css';

import React from 'react';

export const PokeList = () => {
  return (
    <div className={styles.grid}>
      <PokeCard />
    </div>
  );
};
