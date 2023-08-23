import React from 'react';
import featuredimg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './Featured.css'
const Featured = () => {
    return (
        <div className='mt-[130px] featured-item text-white bg-opacity-10 '>
            <SectionTitle
                heading={'FROM OUR MENU'}
                subheading={'---Check it out---'}
            ></SectionTitle>
            <div className='mt-[48px] flex md:justify-center justify-between items-center md:ml-40'>
                <div className='md:mr-5'>
                    <img className='md:w-[90%] w-[280px]' src={featuredimg} alt="" />
                </div>
                <div className='ml-2'>
                    <p>March 23, 2023</p>
                    <h2 className='uppercase font-bold w-full'>Where can i get some?</h2>
                    <p className='md:w-[50%] w-full hidden md:block '><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolore nobis suscipit, ullam, commodi excepturi non eum tenetur omnis tempora praesentium sint ad? Asperiores reprehenderit eaque consequuntur, voluptas, at eius nisi autem culpa cum in corporis, reiciendis sunt eos provident?</small></p>
                    <button className='uppercase btn border-b-2 p-2 border font-bold'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;