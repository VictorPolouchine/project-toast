import React from 'react';

export const ToastContext = React.createContext()
import useKeydown from '../../hooks/useKeydown';

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'It works!',
      variant: 'success',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success',
    },
  ]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])
  useKeydown('Escape', handleEscape)

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast, setToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
