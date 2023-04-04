import { FC } from 'react';
import styles from './styles/Login.module.scss';

type Props = {
  text: string;
};

const Login:FC<Props> = ({ text }) => {
  return (
    <div className={styles.root}>
      <h1>{text}</h1>
    </div>
  );
};

export default Login;