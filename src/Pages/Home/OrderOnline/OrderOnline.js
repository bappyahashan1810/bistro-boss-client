import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { ORDERONLINES } from './OderOnlineConstant';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const OrderOnline = () => {
    return (
        <div className='mt-[80px] mb-[137px]'>
            <SectionTitle
                subheading={"---From 11:00am to 10:00pm---"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-[48px]"
            >

                {
                    ORDERONLINES.map((order, index) => <SwiperSlide key={index}>
                        <img src={order.img} alt="" />
                        <h1 className='text-3xl -mt-16 text-center text-white'>{order.name}</h1>
                    </SwiperSlide>)
                }

            </Swiper>



        </div>
    );
};

export default OrderOnline;