import React, {FC, memo, ReactNode, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import styles from './swiper.module.scss'
import 'swiper/css/bundle';
import "swiper/css/pagination";

type Props = {
    item: any
}

const MySwiper: FC<Props> = ({ item }) => {



    return (
        <Swiper
            spaceBetween={12}
            slidesPerView={1}
            modules={[ Pagination, Autoplay]}
            pagination={true}
            loop={true}
            autoplay={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                item.map((item: any) =>
                    <SwiperSlide>
                        <div className={styles.img_wrapper}>
                            <img className={styles.img} src={item} alt="swiper"/>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default memo(MySwiper)