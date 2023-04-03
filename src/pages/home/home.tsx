import {FC} from "react";
import RootLayout from "../../layout/rootLayout";
import SearchInput from "../../components/inputs/SearchInput";
import AppHeader from "../../components/AppHeader/appHeader";
import ProductCard from "../../components/cards/productCard";


const Home: FC = () => {

    return (
        <RootLayout>
            <AppHeader type={'home'} text={'BigTech'}/>
            <SearchInput text={'text'}/>
            <h2 className={"title"}>Top Tovarlar</h2>
            <div className={'grid'}>
                <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
                <ProductCard name={'samsung led monitor'} price={'12 250 650'}/>
                <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
                <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
                <ProductCard name={'iphone 14 pro max'} price={'12 250 650'}/>
            </div>
            <h2 className={"title"}>Barcha Tovarlar</h2>
            <div className={'grid'}>
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
    )
}


export default Home