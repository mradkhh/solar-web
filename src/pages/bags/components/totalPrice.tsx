import { FC } from 'react';
import styles from './components.module.scss';

type Props = {
  price: string;
};

const TotalPrice:FC<Props> = ({ price }) => {
  return (
    <div className={styles.total__price}>
      <div>
          <h5>Umumiy narx</h5>
          <h6>${price}</h6>
      </div>
        <button className="btn btn__black">Sotib olish</button>
    </div>
  );
};

export default TotalPrice;