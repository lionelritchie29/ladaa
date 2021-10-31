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
      className='fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center'
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
      <div className='w-5/6 lg:w-3/5 bg-white rounded'>
        <div className='bg-green-800 py-3 text-gray-200 px-3 font-semibold flex justify-between'>
          <span>{title}</span>
          <button
            onClick={() => onClose()}
            className='text-xl font-semibold hover:text-gray-300'>
            &times;
          </button>
        </div>

        <div className='p-3 max-h-96 overflow-scroll'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
