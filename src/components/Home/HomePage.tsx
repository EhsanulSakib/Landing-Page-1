import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import GetStartedSection from './StartedSection/GetStartedSection';
import Plan from './Plans/Plan';
import FAQ from './FAQ/FAQ';

const HomePage = () => {
    return (
        <div id='home' className='mt-6 lg:mt-8 flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-36 w-full'>
            <Banner />
            <Features/>
            <Plan/>
            <FAQ/>
            <GetStartedSection/>
        </div>
    );
};

export default HomePage;