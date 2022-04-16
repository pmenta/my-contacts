import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 52px;

  font-weight: bold;
  font-size: 16px;
  color: #fff;

  background: ${({ theme }) => theme.colors.primary.main};

  outline: none;
  border: none;
  border-radius: 4px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  transition: background-color 0.2s ease-in;

  &:hover {
      background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark}
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }

`;
