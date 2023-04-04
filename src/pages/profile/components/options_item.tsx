import { FC } from 'react';
import {ArrowRightIcon} from "../../../assets/icons";
import styles from './components.module.scss';

type Props = {
  text: string;
  icon: JSX.Element;
  type?: 'exit';
  setState?: (bool: boolean) => void
};

const OptionsItem:FC<Props> = ({ text, icon, type, setState }) => {

    const handleClick = () => {
        if (setState) {
            type === 'exit' ? setState(true) : null
        }
    }
  return (
    <div onClick={handleClick} className={styles.options__item}>
      <div>
          <span>{icon}</span>
          <h4 style={{ color: type === 'exit' ? 'red' : 'black' }}>{text}</h4>
      </div>
      <span>
        <ArrowRightIcon/>
      </span>
    </div>
  );
};

export default OptionsItem;