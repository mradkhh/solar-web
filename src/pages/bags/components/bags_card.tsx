import { FC } from 'react';
import styles from './components.module.scss';
import {DeleteIcon} from "../../../assets/icons";
import Counter from "../../products/components/counter";

type Props = {
    title: string;
    price: string;
    exist: string | boolean
};

const BagsCard:FC<Props> = ({ exist, title, price }) => {
    return (
        <div className={styles.bags_card}>
            <div className={styles.card_img}>
                <img src="/favo.png" alt="favourites"/>
            </div>
            <div className={styles.card_options}>
                <h3>{title}</h3>
                <div>{price}</div>
                { exist ? <p>{exist} hozirda mavjud </p> : <p>mavjud emas</p> }
                <div className={styles.counter}>
                    <Counter/>
                </div>
            </div>
            <div className={styles.like_icon}>
                <DeleteIcon/>
            </div>
        </div>
    );
};

export default BagsCard;