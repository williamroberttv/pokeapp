import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.text.primary};
  padding: 10px;
  border-radius: 53px;
  width: 200px;
  height: 48px;
  font-size: 16px;
`;
