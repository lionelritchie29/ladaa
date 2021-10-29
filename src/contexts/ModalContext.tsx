import React, { Children, useState } from 'react';
import { If, Then } from 'react-if';
import Modal from '../components/shared/Modal';

export const ModalContext = React.createContext<any>(null);

type props = {
  children: any;
};

const ModalProvider = ({ children }: props) => {
  const [modal, setModal] = useState({
    show: false, //false,
    content: null,
  });

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      <If condition={modal.show}>
        <Then>
          <Modal>{modal.content}</Modal>
        </Then>
      </If>

      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
