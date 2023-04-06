import React from "react";
import RootLayout from "../../layout/rootLayout.js";
import AppHeader from "../../components/AppHeader/appHeader";
import Search_input from "../../components/inputs/search_input";
import ProductCard from "../../components/cards/productCard";
import {useFetch} from "../../services";
import {Category} from "../../models";
import styles from './styles/category.module.scss';


const CategoryId = () => {

    const { data: categoriesId, isLoading, error, fetchData } = useFetch<Category[]>('/category/v1/1');

    console.log(categoriesId)
  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Smartfonlar'}/>
        <Search_input text={'text'}/>
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