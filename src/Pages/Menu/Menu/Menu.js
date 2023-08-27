import React from 'react';
import { Helmet } from 'react-helmet-async';

import MenuTitleCover from '../MenuTitleCover/MenuTitleCover';
import Offer from '../Offer/Offer';
import CategoryMenu from '../CategoryMenu/CategoryMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <MenuTitleCover></MenuTitleCover>
            <Offer></Offer>
            <CategoryMenu></CategoryMenu>

        </div>
    );
};

export default Menu;