import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { useEffect } from 'react';
import { Overlay, Container } from './styles';

import CheckIcon from '../../assets/images/icons/check.svg';

export function Toast({ label, danger, dismissToast }) {
  function dismiss() {
    dismissToast();
  }

  useEffect(() => {
    let timeout;
    if (label !== null) {
      timeout = setTimeout(() => dismissToast(), 15000);
    } else {
      clearTimeout(timeout);
    }
  }, [label]);

  return createPortal(
    <Overlay>
      <Container danger={danger}>
        {danger ? <span>X</span> : <img src={CheckIcon} alt="Ícone de check" width="15px" height="15px" />}
        <p>{label}</p>
        <button type="button" onClick={dismiss}>x</button>
      </Container>
    </Overlay>,
    document.getElementById('toast-root'),
  );
}

Toast.propTypes = {
  label: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  dismissToast: PropTypes.func,
};

Toast.DefaultProps = {
  dismissToast: null,
  danger: false,
};
