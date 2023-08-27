import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import shopCover from '../../../assets/shop/banner2.jpg'
import ShopTab from '../ShopTab/ShopTab';
const OurShop = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Our Shop</title>
            </Helmet>
            <Cover
                imgheading={"OUR SHOP"}
                imgtext={"Would you like to try a dish?"}
                img={shopCover}
            ></Cover>
            <ShopTab></ShopTab>
        </div>
    );
};

export default OurShop;