import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='text-center'>
            <p className='text-yellow-400'>{subheading}</p>
            <div className='flex justify-center'>
                <hr className='w-1/4 border-1  ' />
            </div>
            <h1 className='font-bold'>{heading}</h1>

        </div>
    );
};

export default SectionTitle;