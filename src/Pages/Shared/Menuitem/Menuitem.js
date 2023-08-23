import React from 'react';

const Menuitem = ({ items }) => {
    const { name, recipe, image, price } = items;
    return (
        <div className='flex items-center'>
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className='w-[118px]' src={image} alt="" />
            <div className='ml-8'>
                <h3>{name}-------------------</h3>
                <p>{recipe}</p>
            </div>
            <h4 className='text-yellow-400'>${price}</h4>
        </div>
    );
};

export default Menuitem;