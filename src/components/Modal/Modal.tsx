import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import * as SC from './Modal.styled';

const modalEl = document.getElementById('modal')!;

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IProps> = ({ onClose, children }) => {
  useEffect(() => {
    const closeModalPressEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeModalPressEsc);
    return () => window.removeEventListener('keydown', closeModalPressEsc);
  }, [onClose]);

  const closeModalClickBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <SC.Backdrop onClick={closeModalClickBackdrop}>
      <SC.ModalWrap>
        {children}
        <SC.ButtonCloseModal onClick={() => onClose()}>
          <RiCloseFill />
        </SC.ButtonCloseModal>
      </SC.ModalWrap>
    </SC.Backdrop>,
    modalEl
  );
};
