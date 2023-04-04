import { FC } from 'react';
import styles from './orders.module.scss';
import RootLayout from "../../layout/rootLayout";
import AppHeader from "../../components/AppHeader/appHeader";
import EmptyPageAlert from "../../components/emptyPageAlert";
import OrdersCard from "./components/order_card";


const Orders:FC = () => {
    let data: boolean = true;
  return (
    <RootLayout>
        <AppHeader type={'order'} text={'Buyurtmalarim'}/>

        {
            data 
                ? <>
                    <OrdersCard
                        status={'wait'}
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'180'}
                    />
                    <OrdersCard
                        status={'onway'}
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'180'}
                    />
                    <OrdersCard
                        status={'delivered'}
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'180'}
                    />
                    <OrdersCard
                        status={'rejected'}
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'180'}
                    />
                    <OrdersCard
                        status={'rejected'}
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'180'}
                    />
                    <OrdersCard
                        status={'rejected'}
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'180'}
                    />
                    <OrdersCard
                        status={'rejected'}
                        title={'pihone 14 pro max'}
                        price={'12 250 650 '}
                        exist={'180'}
                    />
                <div className="fixed_margin"></div>
                  </>
                : <EmptyPageAlert
                    title={'Bu sahifa bo’sh'}
                    text={'Bu yerda siz buyurtma bergan mahsulotlar ro’yhatini ko’rishingiz mumkin'}
                   />
        }
    </RootLayout>
  );
};

export default Orders;