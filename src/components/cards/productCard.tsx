import { FC } from 'react';
import styles from './card.module.scss';
import {AddToCart, LikeIcon} from "../../assets/icons";
import {formatPrice} from "../../helper";

type Props = {
  name: string;
  price: string;
  img: any
};

const ProductCard:FC<Props> = ({ name, price, img }) => {
    const nice_price = formatPrice(price)

  return (
    <div className={styles.root}>
     <div className={styles.top}>
          <span>
              <img src={img?.link} alt={img?.fileName}/>
          </span>
         <span className={styles.icon}>
             <LikeIcon/>
         </span>
     </div>
        <div className={styles.middle}>
            <h3>{name}</h3>
            <h5>{nice_price}</h5>
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