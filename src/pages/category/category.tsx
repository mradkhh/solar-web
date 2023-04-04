import React, { FC } from 'react'
import RootLayout from "../../layout/rootLayout.js";
import AppHeader from "../../components/AppHeader/appHeader";
import SearchInput from "../../components/inputs/SearchInput";
import CategoryCard from "../../components/cards/categoryCard";


const Category: FC = () => {
  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Kategoriya'}/>
        <SearchInput text={'text'}/>
        <div className="fixed_height-40"></div>
        <h2 className="title">Ommabop Toifalar</h2>
        <div className="grid-3">
            <CategoryCard title={'smartfon gadjet'}/>
            <CategoryCard title={'macbok monitor'}/>
            <CategoryCard title={'AirPods'}/>
            <CategoryCard title={'ipad'}/>
            <CategoryCard title={'kompyuter'}/>
            <CategoryCard title={'plastik shisha'}/>
            <CategoryCard title={'quloqchinlar'}/>
        </div>
    </RootLayout>
  );
};

export default Category;