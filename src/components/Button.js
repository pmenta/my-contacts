import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 52px;
  padding: 0 16px;

  font-weight: bold;
  font-size: 16px;
  color: #fff;

  background: ${({ theme }) => theme.colors.primary.main};

  outline: none;
  border: none;
  border-radius: 4px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  transition: background-color 0.2s ease-in;

  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark}
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`

    background: ${theme.colors.danger.main};

    &:hover, &:focus {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `};

`;
