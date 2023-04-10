import { FC } from 'react';
import Title from "../../../components/UI/title/title";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './clients.module.scss';



const Clients:FC = () => {
  return (
    <div className={styles.root}>
        <div className={styles.content + ' container'}>
            <Title type={'black'} title={'Наши клиенты'}/>
            <div className={styles.brands}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={6}
                    className="clientsSwiper"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c1.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c2.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c3.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c4.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c5.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c4.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c2.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c3.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src="/imgs/c1.png" alt="clients"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  );
};

export default Clients;