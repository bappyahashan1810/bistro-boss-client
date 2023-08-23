import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../OrderOnline/OrderOnline';
import ImgWithText from '../ImgWithText/ImgWithText';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChecfRecomanded from '../ChecfRecomanded/ChecfRecomanded';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <ImgWithText></ImgWithText>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChecfRecomanded></ChecfRecomanded>
            <Featured></Featured>
        </div>
    );
};

export default Home;