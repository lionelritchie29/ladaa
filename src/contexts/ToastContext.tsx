import React, { createContext, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = createContext<null | ((content: string, type: 'success' | 'error' | 'info' | 'default') => void)>(
  null
);

type props = {
  children: any;
}

const ToastProvider = ({children}: props) => {

  const makeToast = (content: string, type: "success" | "error" | "info" | "default") => {
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
      case "success":
        toast.success(content, config as any);
        break;
      case "error":
        toast.error(content, config as any);
        break;
      case "info":
        toast.info(content, config as any);
        break;
      case "default":
        toast(content, config as any);
        break;
    }
  }

  return (
    <ToastContext.Provider value={makeToast}>
      <ToastContainer />

      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
