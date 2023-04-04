import styles from './styles/category.module.scss';
import RootLayout from "../../layout/rootLayout.js";
import AppHeader from "../../components/AppHeader/appHeader";
import SearchInput from "../../components/inputs/SearchInput";
import ProductCard from "../../components/cards/productCard";
import React from "react";


const CategoryId = () => {
  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Smartfonlar'}/>
        <SearchInput text={'text'}/>
        <div className="fixed_height-40"></div>
        <div className={'grid mt-16'}>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
        </div>
        <div className="fixed_margin"></div>
    </RootLayout>
  );
};

export default CategoryId;