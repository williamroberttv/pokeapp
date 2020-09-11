import React, { useState, useEffect } from 'react';
import { Container, Wrap } from './styles';
import api from '../../services/api';

import handleUppercase from '../../utils/stringToUppercase';

function Cards() {
  const [lastPokes, setLastPokes] = useState([]);

  async function getPokeNames(x) {
    const response = await api.get(`pokemon/${x}`);
    setLastPokes((state) => [...state, response.data]);
  }

  useEffect(() => {
    async function getPokemons() {
      const response = await api.get('pokemon', {
        params: {
          limit: 6,
          offset: 6,
        },
      });

      const pokenames = response.data.results;

      var i;
      for (i = 0; i < 6; i++) {
        getPokeNames(pokenames[i].name);
      }
    }
    getPokemons();
  }, []);

  return (
    <Container>
      <h2>Últimos pokemons</h2>
      <Wrap>
        {lastPokes.map((pokes) => (
          <div key={pokes.id}>
            <img src={pokes.sprites.front_default} alt="Avatar" />
            <h1>{handleUppercase(pokes.name)}</h1>
          </div>
        ))}
      </Wrap>
    </Container>
  );
}

export default Cards;
