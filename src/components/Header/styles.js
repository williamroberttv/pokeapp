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
      margin-left: 30px;
      font-size: 32px;
    }
  }
`;

export const Socials = styled.div`
  button {
    margin-right: 45px;
  }
  img {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #ffebe0;
    border-radius: 16px;
    cursor: pointer;
  }
`;
