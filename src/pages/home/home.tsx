import React, {FC} from "react";
import Search_input from "../../components/inputs/search_input";
import AppHeader from "../../components/AppHeader/appHeader";
import ProductCard from "../../components/cards/productCard";
import {useFetch} from "../../services";
import {Category} from "../../models";
import RootLayout from "../../layout/rootLayout";


const Home: FC = () => {

    const { data: top_products } = useFetch<Category[]>('/product/v1?page=0&size=10&top=true&sortBy=&sortDirection=DESC');
    const { data: all_products } = useFetch<Category[]>('/product/v1?page=0&size=10&sortBy=&sortDirection=DESC');


    console.log(top_products)

    return (
        <RootLayout>
            <AppHeader type={'home'} text={'BigTech'}/>
            <Search_input text={'text'}/>
            <div className="fixed_height-40"></div>
            <h2 className={"title"}>Top Tovarlar</h2>
            <div className={'grid'}>
                {
                    top_products?.content?.map((item: any) =>
                        <ProductCard img={item?.photos[0]} name={item?.name} price={item?.price}/>
                    )
                }
            </div>
            <h2 className={"title"}>Barcha Tovarlar</h2>
            <div className={'grid'}>
                {
                    all_products?.content?.map((item: any) =>
                        <ProductCard img={item?.photos[0]} name={item?.name} price={item?.price}/>
                    )
                }
            </div>
            <div className="fixed_margin"></div>
        </RootLayout>
    )
}


export default Home