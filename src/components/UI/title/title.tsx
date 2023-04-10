import { FC } from 'react';
import {LineIcon, LineWhiteSVG} from "../../../assets/icons";
import styles from './index.module.scss';

type Props = {
  type: string;
  title: string
};

const Title:FC<Props> = ({ title, type }) => {
  return (
    <div className={styles.root}>
        <h2 className={type === 'white' ? styles.white : styles.black}>{title}</h2>
        <span> { type === 'white' ? <LineWhiteSVG/> : <LineIcon/> }</span>
    </div>
  );
};

export default Title;