import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import cover from '../../../assets/menu/banner3.jpg'

const MenuTitleCover = () => {
    return (
        <>
            <Cover
                imgheading={'OUR MENU'}
                imgtext={'Would you like to try a dish?'}
                img={cover}
            ></Cover>
        </>
    );
};

export default MenuTitleCover;