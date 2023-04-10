import { FC } from 'react';
import styles from './products.module.scss';
import RootLayout from "../../layout/rootLayout";
import Products from "../../components/sections/products";



const ProductsPage:FC = () => {
  return (
    <RootLayout>
        <Products/>
    </RootLayout>
  );
};

export default ProductsPage;