import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    filter: opacity(0);
    bottom: -75px;
  }
  100% {
    filter: opacity(100);
    bottom: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  bottom: 24px;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  max-width: 350px;
  height: 65px;
  width: 100%;
  padding: 8px 16px;

  margin: 0 auto;

  background: #38a169;
  color: #fefffe;

  border-radius: 4px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  display: flex;
  align-items: center;

  animation: ${fadeIn} 1s ease;

  p {
    margin-left: 8px;
  }

  img {
    transform: translate(0, 10%);
  }

  button {
    margin-left: auto;
    margin-bottom: auto;
    font-size: 18px;

    background: none;
    border: none;

    color: #fff;
    transition: color 0.2s ease-in;
    &:hover {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

`;
