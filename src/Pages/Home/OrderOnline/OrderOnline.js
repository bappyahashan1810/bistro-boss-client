import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { ORDERONLINES } from './OderOnlineConstant';

const OrderOnline = () => {
    return (
        <div className='mt-[80px] mb-[137px]'>
            <div className='text-center'>
                <p className='text-yellow-400'>---From 11:00am to 10:00pm---</p>
                <div className='flex justify-center'>
                    <hr className='w-1/4 border-1  ' />
                </div>
                <h1 className='font-bold'>ORDER ONLINE</h1>

            </div>
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