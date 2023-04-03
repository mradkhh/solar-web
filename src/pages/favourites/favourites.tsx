import { FC } from 'react'
import RootLayout from "../../layout/rootLayout";
import AppHeader from "../../components/AppHeader/appHeader";
import SearchInput from "../../components/inputs/SearchInput";
import EmptyPageAlert from "../../components/emptyPageAlert";
import FavouritesCard from "./components/favourites_card";


const Favourites: FC = () => {
    let data: boolean = true
  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Sevimlilar'}/>
        {
            data
                ? <>
                    <FavouritesCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'179'}
                    />
                    <FavouritesCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'179'}
                    />
                    <FavouritesCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={false}
                    />
                    <FavouritesCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'179'}
                    />
                    <FavouritesCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'179'}
                    />
                    <FavouritesCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'179'}
                    />
                    <FavouritesCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={false}
                    />
                <div className="fixed_margin"></div>
                </>
                : <EmptyPageAlert
                    title={'yoqqan mahsulotni qo’shing'}
                    text={'bosh sahifaga o’ting va mahsulotdagi belgisini bosing'}
                />
        }
    </RootLayout>
  );
};

export default Favourites;