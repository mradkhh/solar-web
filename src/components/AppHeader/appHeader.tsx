import { FC } from 'react';
import styles from './app_header.module.scss';

type Props = {
  type: string;
  text: string
};

const AppHeader:FC<Props> = ({ type, text }) => {

  return (
    <div className={type === 'home' ? styles.home__root : styles.root + ' container'}>
      <h1>{text}</h1>
    </div>
  );
};

export default AppHeader;