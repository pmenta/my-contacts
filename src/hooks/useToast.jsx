import { useToastDispatchContext } from '../context/ToastContext';

export function useToast() {
  const dispatch = useToastDispatchContext();

  function toast(label) {
    console.log(label);
    dispatch(label ? { label } : 'foda');
  }

  return toast;
}
