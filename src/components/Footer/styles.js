import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 124px;
  /* position: absolute; */
  /* left: 0; */
  /* bottom: 0; */
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.primary};
  @media (max-width: 720px) {
    height: 300px;
  }
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
  color: ${(props) => props.theme.colors.text.footer};
  border-bottom: 1px solid rgba(102, 102, 102, 0.2);
  h1 {
    font-size: 28px;
    color: ${(props) => props.theme.colors.secundary};
  }
  @media (max-width: 720px) {
    flex-direction: column-reverse;
    /* margin: 20px auto; */
    border: none;
    margin-top: 50px;
    h1 {
      margin-top: 25px;
      padding-top: 20px;
      width: 100%;
      text-align: center;
      border-top: 1px solid rgba(102, 102, 102, 0.2);
    }
  }
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 70%;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Mail = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 15px;
    color: ${(props) => props.theme.colors.secundary};
  }
  p {
    width: 100%;
    margin-right: 50px;
    font-weight: 700;
    font-size: 16px;
  }
  @media (max-width: 720px) {
    margin-bottom: 20px;
    p {
      margin: 0;
    }
  }
`;

export const SocialLogos = styled.div`
  img {
    width: 35px;
    height: 35px;
    margin-left: 20px;
    padding: 10px;
    border: 1px solid #ffebe0;
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  color: ${(props) => props.theme.colors.text.footer};
  h3 {
    font-weight: 500;
    font-size: 14px;
  }
  p {
    font-weight: 300;
    font-size: 11px;
    display: none;
  }
  img {
    width: 40px;
  }
  @media (max-width: 720px) {
    margin-top: 10px;
    flex-direction: column;
    p {
      display: block;
    }
    img {
      margin-bottom: 20px;
    }
  }
`;
