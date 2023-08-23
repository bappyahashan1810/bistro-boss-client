import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { CHECFRECOMMENTS } from '../../../Components/Constant/ChecfRecomanded';
import { Link } from 'react-router-dom';

const ChecfRecomanded = () => {
    return (
        <div className='mt-[130px]'>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subheading={'---Should Try---'}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 place-items-center  md:gap-8  lg:gap-10 gap-6 mt-[48px] '>
                {
                    CHECFRECOMMENTS.map((checf, index) =>
                        <div key={index} className="card lg:w-full md:w-full w-1/2 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={checf.img} alt="Shoes" className="rounded-xl md:w-[300px] w-[200px]" />
                            </figure>
                            <div className="card-body items-center text-center text-sm md:text-lg">
                                <h2 className="">{checf.name}</h2>
                                <p>{checf.text.length > 100 ? (<>{checf.text.slice(0, 100)}  <Link className='text-blue-500'>Read more</Link></>) : checf.text}</p>
                                <div className="card-actions">
                                    <button className="lg:w-[196px] md:w-[120px] w-[80px] lg:py-3 md:py-1 py-0 border-b-2 border-[#BB8506] rounded-sm lg:px-[30px] px-4 bg-[#E8E8E8]">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ChecfRecomanded;