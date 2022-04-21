import { useEffect, useState } from 'react';
import { Toast } from '.';
import { useToast } from '../../hooks/useToast';

export function ToastProvider() {
  // eslint-disable-next-line no-unused-vars
  const [toast, handleToast] = useToast();
  const [activeToast, setActiveToast] = useState(toast);

  useEffect(() => {
    setActiveToast(toast);
  }, [toast]);

  console.log(activeToast);

  return (
    activeToast && <Toast label={toast.label} />
  );
}
