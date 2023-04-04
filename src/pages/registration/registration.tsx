import { FC } from 'react';
import styles from './styles/Registration.module.scss';

type Props = {
  text: string;
};

const Registration:FC<Props> = ({ text }) => {
  return (
    <div className={styles.root}>
      <h1>{text}</h1>
    </div>
  );
};

export default Registration;