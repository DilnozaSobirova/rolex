import React from 'react';
import "./main.css";
import images1 from '../../images/rolex-one.svg';
import images2 from '../../images/rolex-two.svg';
import images3 from '../../images/rolex-three.svg';
import images4 from '../../images/rolex-four.svg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import WatchComponent from './WatchComponent';
const main = () => {
    return (
        <section className='main-box'>
            <>
                <WatchComponent />
            </>
            <div className='img-box'>

                <Swiper className='swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{ width: '500px', height: 'auto' }}
                >

                    <SwiperSlide  >
                        <img style={{ width: '400px', height: 'auto' }} src={images1} alt="" />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img style={{ width: '400px', height: 'auto' }} src={images2} alt="" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ width: '400px', height: 'auto' }} src={images3} alt="" />

                    </SwiperSlide>
                    <SwiperSlide >
                        <img style={{ width: '400px', height: 'auto' }} src={images4} alt="" />

                    </SwiperSlide>

                </Swiper>
            </div>

        </section >
    )
}

export default main
