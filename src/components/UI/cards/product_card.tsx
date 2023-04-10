import { FC } from 'react';
import {ArrowIcon} from "../../../assets/icons";
import {Link} from "react-router-dom";
import styles from './styles/index.module.scss';

type Props = {
  name: string;
  image: string;
  id: number
};

const ProductCard:FC<Props> = ({ name, image, id }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
          <img src={image} alt="product"/>
      </div>
        <div className={styles.body}>
            <h4>{name}</h4>
        </div>
        <div className={styles.bottom}>
            <Link to={'/products/1'} className="btn btn_bordered">Подробнее <ArrowIcon/></Link>
        </div>
    </div>
  );
};

export default ProductCard;