import {
  createContext, useState, useContext, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from '../components/Toast/ToastContainer';

const ToastStateContext = createContext();
export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ label: null });

  const addToast = useCallback((toastObj) => {
    setToast(toastObj);
  }, [setToast]);

  const dismissToast = useCallback(() => {
    setToast({ label: null });
  }, [setToast]);

  return (
    <ToastStateContext.Provider value={addToast}>
      {children}
      <ToastContainer toast={toast} dismissToast={dismissToast} />
    </ToastStateContext.Provider>
  );
}

ToastProvider.propTypes = { children: PropTypes.node };
ToastProvider.defaultProps = { children: null };

export const useToast = () => useContext(ToastStateContext);
