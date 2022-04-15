import styled from 'styled-components';

export const Container = styled.div``;

export const InputSearchContainer = styled.form`
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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    padding: 8px 16px;

    color: ${({ theme }) => theme.colors.primary.main};

    text-decoration: none;
    font-weight: bold;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }

`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    button {
      display: flex;
      align-items: center;

      background: transparent;
      border: none;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
      }

      img {
        margin-left: 8px;
      }

    }
  }
`;

export const CardList = styled.ul`
  margin-top: 8px;
`;

export const Card = styled.li`
  padding: 16px;

  border-radius: 4px;

  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & { // Todo elemento CARD seguido de outro elemento CARD
    margin-top: 16px;
  }

  div:first-child {
    width: 100%;
    max-width: 230px;

    div {
      display: flex;
      align-items: center;

      small {
        margin-left: 8px;
        padding: 3px 6px;

        border-radius: 4px;

        text-transform: uppercase;
        font-weight: bold;

        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }

    span {
      display: block;
      margin-top: 4px;

      font-size: 14px;

      color: ${({ theme }) => theme.colors.gray[200]};
    }

  }

  div:last-child {
      display: flex;
      align-items: center;

      button {
        border: none;
        background: transparent;

        margin-left: 12px;
      }

  }

`;
