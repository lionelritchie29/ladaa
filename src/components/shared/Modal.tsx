import { Transition } from '@headlessui/react';
import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

type props = {
  children: any;
  title: string;
  onClose: Function;
};

const Modal = ({ children, onClose, title }: props) => {
  const [modal, setModal] = useContext(ModalContext);

  return (
    <div
      className='fixed top-0 left-0 h-screen w-full z-40 flex justify-center items-center'
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>

      <div className='w-5/6 lg:w-3/5 bg-white rounded-lg'>
        <div className='bg-green-800 py-3 text-gray-200 px-3 font-semibold flex justify-between rounded-t-lg'>
          <span>{title}</span>
          <button
            onClick={() => onClose()}
            className='text-xl font-semibold hover:text-gray-300'>
            &times;
          </button>
        </div>

        <div className='p-3 overflow-y-auto'>{children}</div>
      </div>

    </div>
  );
};

export default Modal;
