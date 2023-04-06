import { FC } from 'react';
import styles from './app_header.module.scss';
import {ArrowLeftIcon} from "../../assets/icons";
import {Link, useNavigate} from "react-router-dom";

type Props = {
  type: string;
  text: string;
  left?: JSX.Element | boolean
  to?: string
  center?: string | boolean
  right?: string | boolean | JSX.Element
};

const AppHeader:FC<Props> = ({ type, text, left, to = '/' , right, center = true }) => {

  const navigate = useNavigate()
  return (
    <div className={(type === 'home' ? styles.home__root : styles.root) + ' container ' + (left ? styles.more : '')}>
      { left ? <span onClick={() => navigate(-1)}>{left}</span> : null }
      { center ? <h1>{text}</h1> : null }
      { right ? <h6>{right}</h6> : null }
    </div>
  );
};

export default AppHeader;