import { FC } from 'react';
import styles from './styles/index.module.scss';

interface Props  {
    title: string
    subtitle: string
    color: string
    number: string
};

const HowWorkItem:FC<Props> = ({ subtitle, title, color, number }) => {
  return (
    <div className={styles.root}>
      <div className={styles.circle} style={{ border: `3px solid ${color}` }}>{number}</div>
        <div className={styles.line}>- - - - - -<span></span></div>
        <div className={styles.info}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  );
};

export default HowWorkItem;