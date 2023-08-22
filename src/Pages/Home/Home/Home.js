import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../OrderOnline/OrderOnline';
import ImgWithText from '../ImgWithText/ImgWithText';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <ImgWithText></ImgWithText>
        </div>
    );
};

export default Home;