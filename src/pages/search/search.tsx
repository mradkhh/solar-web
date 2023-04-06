import React, { FC } from 'react';
import RootLayout from "../../layout/rootLayout";
import Search_input from "../../components/inputs/search_input";
import {FilterIcon} from "../../assets/icons";
import ProductCard from "../../components/cards/productCard";
import styles from './search.module.scss';


const Search:FC = () => {
  return (
    <RootLayout>
        <div className={styles.search__wrapper}>
            <Search_input type={'search'} text={'Qidiruv'}/>
        </div>
        <div className={'grid'}>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'samsung led monitor'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
        </div>

        <div className="fixed_height-60"></div>
        <div className="fixed_height-60"></div>
    </RootLayout>
  );
};

export default Search;