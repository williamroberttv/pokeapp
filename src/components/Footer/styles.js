import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 124px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Wrap = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Socials = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text.secundary};
  border-bottom: 1px solid rgba(102, 102, 102, 0.2);
  h1 {
    font-size: 28px;
    color: ${(props) => props.theme.colors.secundary};
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 50%;
    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 15px;
        color: ${(props) => props.theme.colors.secundary};
      }
      p {
        margin-right: 50px;
        font-weight: 700;
        font-size: 16px;
      }
    }
    img {
      width: 35px;
      height: 35px;
      margin-left: 20px;
      padding: 10px;
      border: 1px solid #ffebe0;
      border-radius: 16px;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  color: ${(props) => props.theme.colors.text.secundary};
  img {
    width: 40px;
  }
`;
