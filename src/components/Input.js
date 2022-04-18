import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;

  border-radius: 4px;
  border: 2px solid #fff;

  outline: none;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  transition: all 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main};

    &::placeholder {
      color: ${theme.colors.danger.main}
    }

    &:focus {
      border-color: ${theme.colors.danger.dark};
      box-shadow: 0px 4px 10px rgba(249,113,113,0.55);
    }

  `};

`;
