import { FC } from 'react';
import styles from './components.module.scss';
import {XIcon} from "../../../assets/icons";

type Props = {
    setShow: (bool: boolean) => void
}


const LogoutModal:FC<Props> = ({ setShow }) => {

    const handleClick = () => {
        setShow(false)
    }
  return (
    <div className={styles.logout__modal}>
        <span onClick={handleClick}>
            <XIcon/>
        </span>
      <h3>Chiqish</h3>
        <p>Siz profildan chiqmoqchimisiz?</p>
        <div>
            <button onClick={handleClick} className="btn btn__black">Yo'q</button>
            <button onClick={handleClick} className="btn btn__white">Ha</button>
        </div>
    </div>
  );
};

export default LogoutModal;