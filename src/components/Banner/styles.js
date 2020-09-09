import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 500px;
  background-color: #f3be00;
  margin: 50px auto;
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  @media (max-width: 1075px) {
    width: 100%;
    height: 650px;
    margin: 0;
    overflow: hidden;
  }
`;

export const Main = styled.div`
  width: 50%;
  margin-right: 20px;
  height: 100%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
  h1 {
    font-size: 48px;
    margin-top: 7px;
    font-weight: 900;
  }
  p {
    margin-top: 25px;
    width: 278px;
    font-size: 14px;
    line-height: 16px;
  }
  button {
    margin-top: 50px;
  }
  @media (max-width: 705px) {
    padding-left: 30px;
  }
  @media (max-width: 568px) {
    h3 {
      font-size: 16px;
    }
    h1 {
      font-size: 36px;
    }
    p {
      width: 182px;
    }
  }
  @media (max-width: 400px) {
    padding: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const PokeImage = styled.div`
  position: absolute;
  right: 5%;
  top: 15%;
  img {
    width: 479;
  }
  @media (max-width: 1075px) {
    width: 320px;
    right: 0%;
  }
  @media (max-width: 557px) {
    top: 30%;
    right: -18%;
    img {
      width: 350px;
    }
  }
  @media (max-width: 400px) {
    display: none;
  }
  @media (max-width: 450px) {
    right: -32%;
    img {
      width: 320px;
    }
  }
`;
export const ArrowLeft = styled.div`
  position: absolute;
  top: 45%;
  right: 97%;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  &:hover {
    opacity: 0.9;
  }
  img {
    width: 22px;
  }
  @media (max-width: 1075px) {
    top: 85%;
    right: 52%;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
export const ArrowRight = styled.div`
  position: absolute;
  top: 45%;
  left: 97%;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  &:hover {
    opacity: 0.7;
  }
  img {
    width: 22px;
  }
  @media (max-width: 1075px) {
    top: 85%;
    left: 52%;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
