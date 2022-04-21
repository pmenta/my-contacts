import { useCallback, useState } from 'react';

export function useToast() {
  const [toast, setToast] = useState();

  const handleToast = useCallback((toastLabel) => {
    if (!toastLabel) setToast();
    console.log(toastLabel);
    setToast({ label: toastLabel });
    setTimeout(() => setToast(), 3600);
  }, []);

  return [toast, handleToast];
}
