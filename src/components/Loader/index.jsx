import { createPortal } from 'react-dom';
import { Overlay } from './styles';

export function Loader() {
  document.body.style.overflow = 'hidden';
  const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
  document.body.style.paddingRight = `${scrollBarCompensation}px`;

  return createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root'),
  );
}
