import { FC } from 'react';
import styles from './styles/product.module.scss';

type Props = {
  text: string;
};

const InfoItem:FC<Props> = ({ text }) => {
  return (
    <div className={styles.infoItem__root}>
      <h5>{text}</h5>
    </div>
  );
};

export default InfoItem;