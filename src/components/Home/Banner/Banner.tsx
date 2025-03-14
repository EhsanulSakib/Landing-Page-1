import CommonButton from '@/components/(shared)/Button/CommonButton';
import React from 'react';
import ChatFeature from './ChatFeature';
import FadeUpAnimation from '@/components/(shared)/Animation/FadeUpAnimation';
import SupportFeature from './SupportFeature';

const Banner = () => {
    return (
        <div>
            <div className='w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 flex items-center flex-col justify-center mx-auto text-center mb-6 md:mb-8 lg:mb-16 xl:mb-20'>
                <h1 className='mb-2 lg:mb-4 font-bold'>Transform Your Project Management with AI-Powered Collaboration</h1>
                <h3>Your AI-Powered assistant for smarter project planning, streamlined workflows, and actionable insights.</h3>
            </div>
            <div className='flex w-full items-center justify-center gap-4'>
                <CommonButton title="Start Free Trail" link='/login' style='border border-primary bg-primary text-primaryText hover:bg-primary/70 transition ease-in-out duration-500' />
                <CommonButton title="Request a Demo" link='/login' style='border border-primaryText hover:bg-primaryText hover:text-background transition ease-in-out duration-500' />
            </div>

            <FadeUpAnimation>
                <ChatFeature />
            </FadeUpAnimation>

            <SupportFeature/>
        </div>
    );
};

export default Banner;