import { Toast } from '.';
import { useToastStateContext } from '../../context/ToastContext';

export function ToastContainer() {
  const { label } = useToastStateContext();

  return (
    label && <Toast label={label} />
  );
}
