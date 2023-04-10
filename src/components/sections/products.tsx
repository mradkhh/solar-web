import { FC } from 'react';
import Title from "../UI/title/title";
import ProductCard from "../UI/cards/product_card";
import styles from './styles/products.module.scss';



const Products:FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content + ' container'}>
          <Title type={'black'} title={'Наша продукция'}/>
          <div className={styles.badges}>
              <div className="badge badge_active">Солнечные панели</div>
              <div className="badge">Солнечные инверторы</div>
              <div className="badge">Аккумляторная батарея</div>
          </div>
          <div className={styles.products_grid}>
              <ProductCard name={'Hi MO 5 LR5-72HBD'}/>
              <ProductCard name={'Hi MO 5 LR5-72HBD'}/>
              <ProductCard name={'Hi MO 5 LR5-72HBD'}/>
              <ProductCard name={'Hi MO 5 LR5-72HBD'}/>
              <ProductCard name={'Hi MO 5 LR5-72HBD'}/>
          </div>
      </div>
    </div>
  );
};

export default Products;