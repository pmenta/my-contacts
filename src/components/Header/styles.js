import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-top: 74px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 201px;
  }
`;

export const InputSearchContainer = styled.form`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;

    border-radius: 25px;
    border: none;

    background: #fff;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    outline: 0; // Contra acessibilidade - Mudar
    padding: 0 16px; // Padding na esquerda e direita
  }
`;
