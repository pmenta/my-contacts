import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Overlay, Container, Footer } from './styles';

import { Button } from '../Button';

export function Modal({ danger }) {
  document.body.style.overflow = 'hidden';
  const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
  document.body.style.paddingRight = `${scrollBarCompensation}px`;

  return createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo</h1>
        <p>Corpo do Modal</p>
        <Footer>
          <button type="button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Remover
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
