import { FC } from 'react';
import styles from './components.module.scss';

type Props = {
  text: string;
};

const Orders:FC<Props> = ({ text }) => {
  return (
    <div className={styles.root}>
      <h1>{text}</h1>
    </div>
  );
};

export default Orders;