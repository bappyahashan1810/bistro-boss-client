import React from 'react';

const FoodCard = ({ items }) => {
    const { name, recipe, image, price } = items;
    return (
        <div>
            <div className="card card-compact md:w-[80%] w-full h-[300px] md:h-[400px] bg-base-100 shadow-xl">
                <figure><img className='h-[100px] md:h-auto' src={image} alt="Shoes" /></figure>
                <p className='absolute right-5 top-3 bg-black text-white p-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline btn-dark hover:text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;