import { FC } from 'react';
import {ArrowIcon} from "../../../assets/icons";
import styles from './styles/index.module.scss';

type Props = {
  name: string;
};

const ProductCard:FC<Props> = ({ name }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
          <img src="/product.png" alt="product"/>
      </div>
        <div className={styles.body}>
            <h4>{name}</h4>
        </div>
        <div className={styles.bottom}>
            <button className="btn btn_bordered">Подробнее <ArrowIcon/></button>
        </div>
    </div>
  );
};

export default ProductCard;