import {FC, useState} from 'react';
import styles from './components.module.scss';

type Props = {
  color: string;
};

const Colors:FC<Props> = ({ color }) => {
    const [ state,setState ] = useState<boolean>(false)
  return (
    <div style={{ backgroundColor: color, color, border: color === '#FFFFFF' ? '1px solid #EEEEEE' : '' }} className={styles.colors}></div>
  );
};

export default Colors;