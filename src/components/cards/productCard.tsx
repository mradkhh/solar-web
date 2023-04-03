import { FC } from 'react';
import styles from './card.module.scss';
import {AddToCart, LikeIcon} from "../../assets/icons";

type Props = {
  name: string;
  price: string
};

const ProductCard:FC<Props> = ({ name, price }) => {
  return (
    <div className={styles.root}>
     <div className={styles.top}>
          <span>
              <img src="/iphone.png" alt="product"/>
          </span>
         <span className={styles.icon}>
             <LikeIcon/>
         </span>
     </div>
        <div className={styles.middle}>
            <h3>{name}</h3>
            <h5>{price}</h5>
        </div>
        <div className={styles.bottom}>
            <button className={'btn btn__black'}>Sotib olish</button>
            <span>
                <AddToCart/>
            </span>
        </div>
    </div>
  );
};

export default ProductCard;