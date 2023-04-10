import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css/bundle';
import "swiper/css/pagination";
import styles from './index.module.scss'


export interface IData {
    title: string
    subtitle: string
    button: string
}
interface Props {
    data: IData[]
    slidesPerView?: number
};

const MySwiper:FC<Props> = ({ data, slidesPerView = 1 }) => {


    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView}
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            loop={true}
            autoplay={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
                {
                    data.map((item: IData, id: number) =>
                        <SwiperSlide key={id}>
                            <div className={styles.swiper_slide}>
                                <div className={styles.root_slide + ' container'}>
                                    <h1>{item?.title}</h1>
                                    <p>{item?.subtitle}</p>
                                    <button className="btn btn_orange">{item?.button}</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
        </Swiper>
    );
};

export default MySwiper;