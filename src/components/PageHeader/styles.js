import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    width: 75px;


    text-decoration: none;

    img {
      transform: rotate(-90deg);
    }

    span {
      margin-left: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

  }

  h1 {
    font-size: 24px;
  }

`;
