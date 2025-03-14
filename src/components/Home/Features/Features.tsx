import React from 'react';
import FirstFeaturesSection from './FirstFeaturesSection';
import SecondFeaturesSection from './SecondFeaturesSection';

const Features = () => {
    return (
        <div className='w-11/12 lg:w-5/6 xl:w-3/4 mx-auto flex flex-col gap-8 md:gap-16 lg:gap-20 xl:gap-24 items-center'>
            <FirstFeaturesSection/>
            <SecondFeaturesSection/>
        </div>
    );
};

export default Features;