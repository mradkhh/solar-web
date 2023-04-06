import React, { FC } from 'react'
import RootLayout from "../../layout/rootLayout.js";
import AppHeader from "../../components/AppHeader/appHeader";
import Search_input from "../../components/inputs/search_input";
import CategoryCard from "../../components/cards/categoryCard";
import {useFetch} from "../../services";
import {Category} from "../../models";


const Category: FC = () => {

    const { data: categories, isLoading, error, fetchData } = useFetch<Category[]>('/category/v1');

    console.log(categories)

  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Kategoriya'}/>
        <Search_input text={'text'}/>
        <div className="fixed_height-40"></div>
        <h2 className="title">Ommabop Toifalar</h2>
        <div className="grid-3">
            {
                categories?.objectKoinot?.map((item: Category) =>
                    <CategoryCard key={item?.id} img={item?.photo?.link} title={item?.name}/>
                )
            }
        </div>
        <div className="fixed_height-60"></div>
        <div className="fixed_height-60"></div>
    </RootLayout>
  );
};

export default Category;