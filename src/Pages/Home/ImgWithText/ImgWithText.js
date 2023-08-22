import React from 'react';
import checf from '../../../assets/home/chef-service.jpg'

const ImgWithText = () => {
    return (
        <div className='relative'>
            <img className='' src={checf} alt="" />
            <div className='absolute w-3/4 top-1/3 left-[12%] right-10 bg-white text-center p-14'>
                <h1 className='font-bold'>Bistro Boss</h1>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</small></p>

            </div>
        </div>
    );
};

export default ImgWithText;