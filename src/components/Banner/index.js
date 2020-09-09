import React from 'react';

import { Container, Main, PokeImage, ArrowRight, ArrowLeft } from './styles';
import Button from '../Button';

import BannerImg from '../../assets/images/hero-banner__image.png';
import ArrowLeftImg from '../../assets/images/arrow-left.svg';
import ArrowRightImg from '../../assets/images/arrow-right.svg';

function Banner() {
  return (
    <Container>
      <Main>
        <h3>Faça seu teste</h3>
        <h1>De frontend</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, euismod
          at egestas sapien porttitor dui.{' '}
        </p>
        <Button />
      </Main>
      <PokeImage>
        <img src={BannerImg} alt="Charizard" />
      </PokeImage>
      <ArrowLeft>
        <img src={ArrowLeftImg} alt="" />
      </ArrowLeft>
      <ArrowRight>
        <img src={ArrowRightImg} alt="" />
      </ArrowRight>
    </Container>
  );
}

export default Banner;
