import styled from 'styled-components';

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;

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
