import { FC } from 'react';
import styles from './app_header.module.scss';
import {ArrowLeftIcon} from "../../assets/icons";

type Props = {
  type: string;
  text: string;
  left?: JSX.Element;
  center?: string | boolean
  right?: string | boolean
};

const AppHeader:FC<Props> = ({ type, text, left, right, center = true }) => {

  return (
    <div className={(type === 'home' ? styles.home__root : styles.root) + ' container ' + (left ? styles.more : '')}>
      { left ? <span>{left}</span> : null }
      { center ? <h1>{text}</h1> : null }
      { right ? <h6>{right}</h6> : null }
    </div>
  );
};

export default AppHeader;