import PropTypes from 'prop-types';
import { Toast } from '.';

export function ToastContainer({ toast, dismissToast }) {
  return (
    toast.label && <Toast label={toast.label} dismissToast={dismissToast} />
  );
}

ToastContainer.propTypes = {
  toast: PropTypes.shape({
    label: PropTypes.string,
  }),
  dismissToast: PropTypes.func,
};

ToastContainer.defaultProps = {
  toast: {
    label: null,
  },
  dismissToast: null,
};
