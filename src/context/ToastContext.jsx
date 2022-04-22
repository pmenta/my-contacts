import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const ToastStateContext = createContext();
const ToastDispatchContext = createContext();

function ToastAdd(label) {
  return label ? { label } : null;
}

export function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(ToastAdd, {});

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
}

ToastProvider.propTypes = { children: PropTypes.node };
ToastProvider.defaultProps = { children: null };

export const useToastStateContext = () => useContext(ToastStateContext);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);
