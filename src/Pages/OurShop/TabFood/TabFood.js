import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

const TabFood = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 gap-3 mt-5 md:mx-16'>
            {
                items.map((items, index) => <FoodCard
                    key={index}
                    items={items}
                ></FoodCard>)
            }
        </div>
    );
};

export default TabFood;