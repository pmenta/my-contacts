import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Overlay, Container } from './styles';

import CheckIcon from '../../assets/images/icons/check.svg';

export function Toast({ label }) {
  return createPortal(
    <Overlay>
      <Container>
        <img src={CheckIcon} alt="Ícone de check" width="15px" height="15px" />
        <p>{label}</p>
        <button type="button">x</button>
      </Container>
    </Overlay>,
    document.getElementById('toast-root'),
  );
}

Toast.propTypes = {
  label: PropTypes.string.isRequired,
};
