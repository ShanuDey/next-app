import { PokeCard } from '../components/PokeCard';
import styles from '../styles/PokeList.module.css';

import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';

export const PokeList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${Math.floor(
          Math.random() * 500 + 1
        )}`
      )
      .then(function (response) {
        console.log(response);
        setPokemons(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.grid}>
      {pokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};
