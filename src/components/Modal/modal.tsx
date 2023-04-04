import React, {FC, ReactNode} from 'react';
import styles from './modal.module.scss';

type Props = {
    children: ReactNode,
    show: boolean;
    setShow: (bool: boolean) => void
};

const Modal:FC<Props> = ({ children, show, setShow }) => {
  return (
          show
                ? <div onClick={() => setShow(false)} className={styles.modal}>
                  <div onClick={(e) => e.stopPropagation()} className={styles.content}>
                      {children}
                  </div>
              </div>
              : null
  );
};

export default Modal;