import { FC } from 'react';
import Title from "../UI/title/title";
import ProductCard from "../UI/cards/product_card";
import styles from './styles/products.module.scss';
import {useFetch} from "../../services";



const Products:FC = () => {

    const { data, fetchData, isLoading, error } = useFetch('/products', 'get')

    console.log(data)
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
              {
                  data?.map((item: any) =>
                      <ProductCard image={item?.image_1} name={item?.name}/>
                  )
              }
          </div>
      </div>
    </div>
  );
};

export default Products;