import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;

  border-radius: 4px;
  border: 2px solid #fff;

  outline: none;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  transition: border-color .2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

`;
