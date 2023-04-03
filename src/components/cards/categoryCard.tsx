import { FC } from 'react';
import styles from './card.module.scss';
import {Link} from "react-router-dom";

type Props = {
  title: string;
};

const CategoryCard:FC<Props> = ({ title }) => {
  return (
    <Link to={'/category/1'}>
        <div className={styles.category__card}>
            <div className={styles.category__img}>
            <span>
                <img src="/ip.png" alt="category"/>
            </span>
            </div>
            <h4>{title}</h4>
        </div>
    </Link>
  );
};

export default CategoryCard;