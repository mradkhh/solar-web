import { FC } from 'react';
import styles from './components.module.scss';

type Props = {
  title: string;
  text: string,
};

const EmptyPageAlert:FC<Props> = ({ text, title }) => {
  return (
    <div className={styles.empty__page_alert}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn btn__black">bosh sahifa</button>
      </div>
    </div>
  );
};

export default EmptyPageAlert;