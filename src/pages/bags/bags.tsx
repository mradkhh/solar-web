import { FC } from 'react';
import styles from './styles/Bags.module.scss';
import RootLayout from "../../layout/rootLayout";
import AppHeader from "../../components/AppHeader/appHeader";
import EmptyPageAlert from "../../components/emptyPageAlert";
import BagsCard from "./components/bags_card";
import TotalPrice from "./components/totalPrice";


const Bags:FC = () => {
    let data: boolean = true

  return (
    <RootLayout>
        <AppHeader type={'bags'} text={'Savat'}/>
        {
            data
                ? <>
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'198'}
                    />
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'198'}
                    />
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'198'}
                    />
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={false}
                    />
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={false}
                    />
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'198'}
                    />
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'198'}
                    />
                    <BagsCard
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={false}
                    />
                <TotalPrice price={'7320'}/>
                <div className="fixed_margin"></div>
                <div className="fixed_margin"></div>
                </>
                : <EmptyPageAlert
                    title={'Savatda hozircha mahsulot yo’q '}
                    text={'bosh sahifadagi termalardan boshlang yoki kerakli mahsulotni qidiruv orqali orqali toping'}
                />
        }
    </RootLayout>
  );
};

export default Bags;