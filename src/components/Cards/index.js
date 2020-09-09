import React, { useState, useEffect } from 'react';
import { Container, Wrap } from './styles';
import api from '../../services/api';

import handleUppercase from '../../utils/stringToUppercase';
import avatar from '../../assets/images/avatar.png';

function Cards() {
  const [lastPokes, setLastPokes] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await api.get('pokemon', {
        params: {
          limit: 6,
          offset: 6,
        },
      });
      console.log(response);
      setLastPokes(response.data.results);
    }
    getPokemons();
  }, []);

  return (
    <Container>
      <h2>Últimos pokemons</h2>
      <Wrap>
        {lastPokes.map((pokes) => (
          <div>
            <img src={avatar} alt="Avatar" />
            <h1>{handleUppercase(pokes.name)}</h1>
          </div>
        ))}
      </Wrap>
    </Container>
  );
}

export default Cards;
