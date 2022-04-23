import { createGlobalStyle, keyframes } from 'styled-components';

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Sora', sans-serif;

    appearance: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 16px;

    .skeleton {
      background: #fff;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      animation: 1.5s ${shine} linear infinite;
    }
  }

  button {
    cursor: pointer;
  }

  input {
    font-size: 16px;
  }
`;
