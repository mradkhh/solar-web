import { FC } from 'react';
import styles from './components.module.scss';

type Props = {
  name: string;
  fullname: string;
  number: string;
};

const ProfileHead:FC<Props> = ({ name, number, fullname }) => {
  return (
    <div className={styles.head__root}>
      <div className={styles.head__img}>
          <img src="/avatar.png" alt="avatar"/>
      </div>
        <div className={styles.head__info}>
            <h4>{name}</h4>
            <h5>{fullname}</h5>
            <h6>{number}</h6>
        </div>
    </div>
  );
};

export default ProfileHead;