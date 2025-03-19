import CommonButton from '@/components/(shared)/Button/CommonButton';
import React from 'react';

const GetStartedSection = () => {
    return (
        <div className='relative w-full flex flex-col justify-between items-center p-16 md:p-20 lg:p-24 gap-4 lg:gap-8'>
            <h2 className='font-semibold text-center'>Ready to Transform Your Business?</h2>

            <div className='flex gap-4'>
                <CommonButton title="Get Started Today" link='/login' style='border border-primary bg-primary text-primaryText hover:bg-primary/70 transition ease-in-out duration-500' />
                <CommonButton title="Request a Consultation" link='/login' style='border border-primaryText hover:bg-primaryText hover:text-background transition ease-in-out duration-500' />
            </div>

            <div className='w-11/12 mx-auto h-full top-0 left-1/2 transform -translate-x-1/2 absolute z-[-1] rounded-lg bg-gradient-to-tl from-tertiary/10 to-primary/40 opacity-90 shadow-lg shadow-primary/30'/>

            <div className='w-56 h-56 bg-gradient-to-tr from-background/70 to-tertiary/40 absolute z-[-20] rounded-full blur-xl left-1/3 -ml-12 mt-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2'/>

        </div>
    );
};

export default GetStartedSection;