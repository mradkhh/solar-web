import { FC } from 'react';
import {LikeIcon} from "../../../assets/icons";
import styles from './components.module.scss';

type Props = {
    title: string;
    price: string;
    exist: string | boolean;
    status: string
};

const OrdersCard:FC<Props> = ({ exist, title, price, status }) => {
    let color: string = '#3C4BDC'
    let text: string = 'Ko’rib chiqilmoqda'

    switch (status) {
        case 'wait':
            color = '#3C4BDC'
            text = 'Ko’rib chiqilmoqda'
            break;
        case 'onway':
            color = '#FCEE21'
            text = 'Yo’lda'
            break;
        case 'delivered':
            color = '#00B154'
            text = 'Yetkazildi'
            break;
        case 'rejected':
            color = '#FF0027'
            text = 'Rad etildi'
            break;
        default:
            color = '#3C4BDC'
            break;
    }


    return (
        <div className={styles.orders_card}>
            <div className={styles.card_img}>
                <img src="/favo.png" alt="favourites"/>
            </div>
            <div className={styles.card_options}>
                <h3>{title}</h3>
                <div>{price}</div>
                { exist ? <p>{exist} hozirda mavjud </p> : <p>mavjud emas</p> }
                <div style={{ backgroundColor: color, color: 'white' }} className={styles.order_status}>{text}</div>
            </div>
        </div>
    );
};

export default OrdersCard;