import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 80%;
  margin: 100px auto;
  @media (max-width: 1337px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 665px) {
  }
`;

export const PokeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 1337px) {
    justify-items: center;
    margin: 0 auto;
  }
  @media (max-width: 705px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 264px;
  height: 280px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  img {
    width: 128px;
  }
  @media (max-width: 705px) {
    width: 358px;
    height: 305px;
  }
  @media (max-width: 371px) {
    width: 280px;
  }
`;

export const PokeCards = styled.div`
  h1 {
    margin-bottom: 16px;
    font-size: 24px;
  }
  @media (max-width: 705px) {
    position: relative;
    margin-top: 50px;
    display: ${(props) =>
      props.className === 'block-card' ? 'block' : 'none'};
    div {
    }
  }
`;
export const CardButtonsContainer = styled.div`
  margin: 20px 0 50px 0;
  display: none;
  justify-content: center;
  @media (max-width: 705px) {
    display: flex;
  }
`;
export const CardButtons = styled.button`
  background-color: ${(props) =>
    props.className === 'selected' ? props.theme.colors.secundary : '#c4c4c4'};
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-left: 5px;
  display: none;

  @media (max-width: 705px) {
    display: initial;
  }
`;

export const PikachuSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 46px;
  margin-left: 20px;
  position: relative;
  @media (max-width: 1337px) {
    margin: 20px 0;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 705px) {
    margin: 10px auto 0 auto;
  }
`;

export const TextSection = styled.div`
  padding: 30px;
  height: 80%;
  background-color: #ffd029;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.secundary};
    margin-bottom: 24px;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text.main};
    width: 445px;
    max-width: 90%;
    line-height: 19px;
    margin-bottom: 24px;
  }
  @media (max-width: 1337px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 705px) {
    width: 100%;
  }
`;

export const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  right: 85%;
  padding: 20px;
  display: none;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 18px;
  }
  @media (max-width: 705px) {
    display: flex;
  }
`;
export const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 85%;
  padding: 20px;
  display: none;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  &:hover {
    opacity: 0.8;
  }
  img {
    width: 18px;
  }
  @media (max-width: 705px) {
    display: flex;
  }
`;
export const PokeballContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 30%;
  img {
    width: 160px;
  }
  @media (max-width: 1337px) {
    top: 45%;
    left: 55%;
  }
  @media (max-width: 1077px) {
    display: none;
  }
`;
export const PikachuContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 60%;
  img {
    background-color: none;
    width: 323px;
  }
  @media (max-width: 1337px) {
    top: 10%;
    left: 70%;
  }
  @media (max-width: 1077px) {
    display: none;
  }
`;
