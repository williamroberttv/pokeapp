import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-height: 2000px;
  margin: 20px auto;
  h2 {
    font-size: 24px;
    margin: 30px 0;
  }
  @media (max-width: 550px) {
    width: 90%;
  }
`;

export const Wrap = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, 168px);
  width: 100%;
  margin: 0 auto;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 168px;
    height: 187px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 6px;
    h1 {
      margin-top: 10px;
      font-size: 16px;
      color: ${(props) => props.theme.colors.secundary};
    }
  }
  @media (max-width: 705px) {
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, 140px);
    div {
      width: 135px;
    }
  }
`;
