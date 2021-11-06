import React, { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type ToastContextType = [
  makeToast: (
    content: string,
    type: 'success' | 'error' | 'info' | 'default',
  ) => void,
  makeToastPromise: (
    promiseFunc: Promise<any>,
    message: ToastPromiseMessage,
  ) => void,
  dismissToast: () => void,
];

export const ToastContext = createContext<any>(null);

type props = {
  children: any;
};

type ToastPromiseMessage = {
  success: string;
  pending: string;
  error: string;
};

const ToastProvider = ({ children }: props) => {
  const makeToast = (
    content: string,
    type: 'success' | 'error' | 'info' | 'default',
  ) => {
    const config = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    switch (type) {
      case 'success':
        toast.success(content, config as any);
        break;
      case 'error':
        toast.error(content, config as any);
        break;
      case 'info':
        toast.info(content, config as any);
        break;
      case 'default':
        toast(content, config as any);
        break;
    }
  };

  const makeToastPromise = (
    promiseFunc: Promise<any>,
    message: ToastPromiseMessage,
  ): Promise<any> => {
    return toast.promise(promiseFunc, message);
  };

  const dismissToast = () => {
    toast.dismiss();
  };

  return (
    <ToastContext.Provider value={[makeToast, makeToastPromise, dismissToast]}>
      <ToastContainer />

      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
