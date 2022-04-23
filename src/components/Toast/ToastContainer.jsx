import PropTypes from 'prop-types';
import { Toast } from '.';

export function ToastContainer({ toast, dismissToast }) {
  return (
    toast.label && <Toast label={toast.label} danger={toast.danger} dismissToast={dismissToast} />
  );
}

ToastContainer.propTypes = {
  toast: PropTypes.shape({
    label: PropTypes.string,
    danger: PropTypes.bool,
  }),
  dismissToast: PropTypes.func,
};

ToastContainer.defaultProps = {
  toast: {
    label: null,
    danger: false,
  },
  dismissToast: null,
};
