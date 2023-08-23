import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Menuitem from '../../Shared/Menuitem/Menuitem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    const getmenudata = () => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === 'popular')))
    }
    useEffect(() => {
        getmenudata();
    }, [])
    return (
        <div className='mx-[100px]'>
            <div className='mt-[92px]'>
                <SectionTitle
                    heading={"FROM OUR MENU"}
                    subheading={"---Check it out---"}
                ></SectionTitle>
            </div>
            <div className='mt-[58px] md:grid grid-cols-2 gap-10'>
                {
                    menu.map((items, index) => <Menuitem
                        key={index}
                        items={items}

                    ></Menuitem>)
                }
            </div>
            <div className='mt-[68px] text-center w-full flex justify-center '>
                <h2 className='uppercase border-b-2 mb-7 w-3/12 p-4 rounded-md font-bold'>view full menu</h2>

            </div>
        </div>
    );
};

export default PopularMenu;