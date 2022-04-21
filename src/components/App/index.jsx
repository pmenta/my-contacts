import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from '../../routes';

import { Header } from '../Header';
import { ToastProvider } from '../Toast/ToastProvider';

import GlobalStyles from '../../assets/styles/global';
import DefaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
          <ToastProvider />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
