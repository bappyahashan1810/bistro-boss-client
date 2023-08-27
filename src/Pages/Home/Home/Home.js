import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../OrderOnline/OrderOnline';
import ImgWithText from '../ImgWithText/ImgWithText';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChecfRecomanded from '../ChecfRecomanded/ChecfRecomanded';
import Featured from '../Featured/Featured';
import Testimonial from '../Testomonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>

            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <ImgWithText></ImgWithText>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChecfRecomanded></ChecfRecomanded>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;