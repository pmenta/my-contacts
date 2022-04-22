import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from '../../routes';

import { Header } from '../Header';
import { ToastProvider } from '../../context/ToastContext';
import { ToastContainer } from '../Toast/ToastContainer';

import GlobalStyles from '../../assets/styles/global';
import DefaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <ToastProvider>
          <GlobalStyles />
          <Container>
            <Header />
            <Routes />
            <ToastContainer />
          </Container>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
