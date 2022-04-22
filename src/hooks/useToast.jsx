import { useToastDispatchContext } from '../context/ToastContext';

export function useToast() {
  const dispatch = useToastDispatchContext();

  function toast(label) {
    dispatch(label ? { label } : null);
  }

  return toast;
}
