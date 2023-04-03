import { FC } from 'react';
import styles from './styles/product.module.scss';

type Props = {
  text?: string;
};

const Counter:FC<Props> = ({  }) => {
  return (
        <div className={styles.counter_root}>
            <span>-</span>
                <h4>{1}</h4>
            <span>+</span>
        </div>
  );
};

export default Counter;