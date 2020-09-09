import styled from 'styled-components';

export const Container = styled.div`
  width: '100%';
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Wrap = styled.div`
  height: 80px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secundary};

  div {
    display: flex;
    align-items: center;
    h2 {
      margin-left: 20px;
      font-size: 32px;
      @media (max-width: 364px) {
        text-align: center;
      }
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    div {
      h2 {
        font-size: 28px;
      }
    }
  }
`;

export const Socials = styled.div`
  button {
    margin-right: 45px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  img {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ffebe0;
    border-radius: 16px;
    cursor: pointer;
    @media (max-width: 364px) {
      width: 30px;
      height: 30px;
      padding: 8px;
      margin-right: 0px;
      margin-left: 10px;
    }
  }
`;
