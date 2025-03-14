import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const HomePage = () => {
    return (
        <div className='mt-6 lg:mt-8 flex flex-col gap-12 md:gap-20 lg:gap-24 xl:gap-32 w-full'>
            <Banner />
            <Features/>
        </div>
    );
};

export default HomePage;