import {FC, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {useFetch} from "../../../services";
import Title from "../../../components/UI/title/title";
import {CircleArrow, CircleArrowLeft} from "../../../assets/icons";
import styles from './gallery.module.scss';


const Gallery:FC = () => {

    const { data, fetchData, isLoading, error } = useFetch('/gallery', 'get')

    console.log(data)
    const swiperRef = useRef<SwiperCore>();

  return (
    <div className={styles.root}>
        <div className={styles.content + ' container'}>
            <Title type={'black'} title={'Фотогалерея'}/>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                pagination={{
                    clickable: true,
                    renderBullet: (index: number, className: string) => {
                        return '<span class="' + className + '"></span>'
                    }
                }}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation, Pagination]}
                className="gallerySwiper"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    data?.map((item: any) =>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <img src={item?.image} alt="gallery"/>
                            </div>
                        </SwiperSlide>
                    )
                }
                <div className={styles.height}></div>
            </Swiper>
            <div className={styles.bullet_wrapper}>
                <div className="swiper-btn swiper-btn-prev" onClick={() => swiperRef.current?.slidePrev()} >
                    <CircleArrowLeft/>
                </div>
                <div className="swiper-btn swiper-btn-next" onClick={() => swiperRef.current?.slideNext()} >
                    <CircleArrow/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Gallery;