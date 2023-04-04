import { FC } from 'react';
import styles from './components.module.scss';
import {Link} from "react-router-dom";

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
        <Link to={'/'} className="btn btn__to-home">bosh sahifa</Link>
      </div>
    </div>
  );
};

export default EmptyPageAlert;