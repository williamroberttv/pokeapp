import React from 'react';
import { Container, Wrap, Socials, Logo } from './styles';
import { FiMail } from 'react-icons/fi';

import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import youtube from '../../assets/images/youtube.svg';
import logo from '../../assets/images/logo-yooh.svg';

function Footer() {
  return (
    <Container>
      <Wrap>
        <Socials>
          <h1>PokeApp</h1>
          <div>
            <div>
              <FiMail size={18} />
              <p>email@testeweb.com</p>
            </div>
            <img src={facebook} alt="Facebook Logo" />
            <img src={instagram} alt="Instagram Logo" />
            <img src={youtube} alt="Youtube Logo" />
          </div>
        </Socials>
        <Logo>
          <p>2020 © Todos os direitos reservados.</p>
          <img src={logo} alt="Logo da Yooh" />
        </Logo>
      </Wrap>
    </Container>
  );
}

export default Footer;
