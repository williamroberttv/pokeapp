import React from 'react';
import {
  Container,
  Wrap,
  Main,
  Mail,
  Socials,
  SocialLogos,
  Logo,
} from './styles';
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
          <Main>
            <Mail>
              <FiMail size={18} />
              <p>email@testeweb.com</p>
            </Mail>
            <SocialLogos>
              <img src={facebook} alt="Facebook Logo" />
              <img src={instagram} alt="Instagram Logo" />
              <img src={youtube} alt="Youtube Logo" />
            </SocialLogos>
          </Main>
        </Socials>
        <Logo>
          <h3>2020 © Todos os direitos reservados.</h3>
          <p>Desenvolvido por</p>
          <img src={logo} alt="Logo da Yooh" />
        </Logo>
      </Wrap>
    </Container>
  );
}

export default Footer;
