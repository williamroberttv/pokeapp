import React, { useState, useEffect } from 'react';
import {
  Container,
  PokeCardsContainer,
  PokeCards,
  Card,
  CardButtonsContainer,
  CardButtons,
  PikachuSection,
  TextSection,
  ArrowLeft,
  ArrowRight,
  PikachuContainer,
  PokeballContainer,
} from './styles';

import handleUppercase from '../../utils/stringToUppercase';
import Button from '../Button';
import api from '../../services/api';

import ArrowLeftImg from '../../assets/images/arrow-left.svg';
import ArrowRightImg from '../../assets/images/arrow-right.svg';
import PokebolaImg from '../../assets/images/pokerbola.png';
import PikachuImg from '../../assets/images/pikachu.png';

function Main() {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [cardSelect, setCardSelect] = useState(1);

  async function getPokemonDetail(pokemon) {
    const response = await api.get(`/pokemon/${pokemon}`);
    setPokemonDetail((state) => [...state, response]);
  }

  function swipeCardRight() {
    if (cardSelect === 4) {
      setCardSelect(1);
    } else {
      setCardSelect(cardSelect + 1);
    }
  }
  function swipeCardLeft() {
    if (cardSelect === 1) {
      setCardSelect(4);
    } else {
      setCardSelect(cardSelect - 1);
    }
  }
  useEffect(() => {
    async function getPokemons() {
      getPokemonDetail('pikachu');
      getPokemonDetail('ivysaur');
      getPokemonDetail('bulbasaur');
      getPokemonDetail('charizard');
    }
    getPokemons();
  }, []);

  return (
    <Container>
      <PokeCardsContainer>
        {pokemonDetail.map((pokemon, index) => (
          <PokeCards
            key={pokemon.data.id}
            className={cardSelect === index + 1 ? 'block-card' : false}
          >
            <h1>{handleUppercase(pokemon.data.name)}</h1>
            <Card>
              <img src={pokemon.data.sprites.front_default} alt="Avatar" />
            </Card>
            <ArrowLeft onClick={swipeCardLeft}>
              <img className="arrow-left" src={ArrowLeftImg} alt="Avatar" />
            </ArrowLeft>
            <ArrowRight onClick={swipeCardRight}>
              <img src={ArrowRightImg} alt="Avatar" />
            </ArrowRight>
          </PokeCards>
        ))}
        <CardButtonsContainer>
          <CardButtons
            className={cardSelect === 1 && 'selected'}
            onClick={() => setCardSelect(1)}
          />
          <CardButtons
            className={cardSelect === 2 && 'selected'}
            onClick={() => setCardSelect(2)}
          />
          <CardButtons
            className={cardSelect === 3 && 'selected'}
            onClick={() => setCardSelect(3)}
          />
          <CardButtons
            className={cardSelect === 4 && 'selected'}
            onClick={() => setCardSelect(4)}
          />
        </CardButtonsContainer>
      </PokeCardsContainer>
      <PikachuSection>
        <TextSection className="maincontent">
          <h2>PokeApp</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a
            lacus, aliquam mattis est enim, molestie diam. Consequat blandit
            nec, venenatis dignissim suspendisse in facilisi molestie duis.
            Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi,
            nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales sed
            ullamcorper dapibus accumsan. Faucibus pharetra, et at orci, vel
            blandit odio. Volutpat urna fusce quisque libero pellentesque in.
            Augue tempor vitae ullamcorper bibendum. Quis facilisi nulla id est
            natoque sed ut consectetur. Id eleifend eros ullamcorper et. Diam,
            ultrices pellentesque urna, integer a lectus. Sit sollicitudin ac
            egestas amet netus. Elit vitae dolor cursus cursus.{' '}
          </p>
          <Button />
        </TextSection>
        <PikachuContainer>
          <img src={PikachuImg} alt="Pickachu" />
        </PikachuContainer>
        <PokeballContainer>
          <img src={PokebolaImg} alt="Pokebola" />
        </PokeballContainer>
      </PikachuSection>
    </Container>
  );
}

export default Main;
