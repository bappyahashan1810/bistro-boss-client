import React from 'react';


const Cover = ({ imgheading, imgtext, img }) => {
    return (
        <div>
            <div className="hero mb-[45px]" style={{ height: '500px', backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60  "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black p-10 bg-opacity-20">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{imgheading}</h1>
                        <p className="mb-5">{imgtext}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;