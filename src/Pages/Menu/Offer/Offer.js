import React from 'react';

import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import Cover from '../../Shared/Cover/Cover';




import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuList from '../../Shared/MenuList/MenuList';

const Offer = () => {
    const [menu] = useMenu();
    const offered = menu.filter(offer => offer.category === 'offered');
    return (
        <div className='mt-[130px]'>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subheading={"---Don't miss---"}
            ></SectionTitle>
            <MenuList
                item={offered}
            ></MenuList>
        </div>
    );
};

export default Offer;