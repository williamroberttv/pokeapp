import React from 'react';
import { Container, Wrap, Socials } from './styles';

import Button from '../Button';

import menu from '../../assets/images/menu.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import youtube from '../../assets/images/youtube.svg';

function Header() {
  return (
    <Container>
      <Wrap>
        <div>
          <img src={menu} alt="facebook logo" />
          <h2>Pokeapp</h2>
        </div>
        <Socials>
          <Button />
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={youtube} alt="youtube logo" />
        </Socials>
      </Wrap>
    </Container>
  );
}

export default Header;
