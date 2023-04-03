import { FC } from 'react';
import styles from './components.module.scss';
import {LikeIcon} from "../../../assets/icons";

type Props = {
  title: string;
  price: string;
  exist: string | boolean
};

const FavouritesCard:FC<Props> = ({ exist, title, price }) => {
  return (
    <div className={styles.favourites_card}>
        <div className={styles.card_img}>
            <img src="/favo.png" alt="favourites"/>
        </div>
        <div className={styles.card_options}>
            <h3>{title}</h3>
            <div>{price}</div>
            { exist ? <p>{exist} hozirda mavjud </p> : <p>mavjud emas</p> }
            <button className="btn btn__black">Sotib olish</button>
        </div>
        <div className={styles.like_icon}>
            <LikeIcon/>
        </div>
    </div>
  );
};

export default FavouritesCard;