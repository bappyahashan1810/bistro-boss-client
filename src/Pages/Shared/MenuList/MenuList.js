import React from 'react';
import Menuitem from '../Menuitem/Menuitem';
import { Link } from 'react-router-dom';

const MenuList = ({ item, title }) => {
    console.log(title);
    return (
        <div>
            <div className='mt-[58px] md:grid grid-cols-2 gap-10 mx-[100px]'>
                {
                    item.map((items, index) => <Menuitem
                        key={index}
                        items={items}

                    ></Menuitem>)
                }
            </div>
            <div className='mt-[68px] text-center w-full flex justify-center '>
                <Link to={`/shop/${title}`}><button className=' uppercase border-b-2 mb-7 w-auto hover:bg-black hover:text-white p-4 rounded-md font-bold'>View Menu</button></Link>

            </div>
        </div>
    );
};

export default MenuList;