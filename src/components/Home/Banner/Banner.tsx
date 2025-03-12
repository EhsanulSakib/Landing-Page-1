import CommonButton from '@/components/(shared)/Button/CommonButton';
import Image from 'next/image';
import React from 'react';

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

            <div className='relative w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto'>
                <Image src={'/asset/orb.png'} alt="orb" width={1200} height={1200} className='w-full mx-auto mt-8 md:mt-12 lg:mt-16 xl:mt-24' />
                <div className='absolute w-full scale-110 h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full radial-gradient -z-[20] blur-2xl'></div>
                <section className='absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125'>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex flex-col items-end w-full'>
                            <p>Jhon</p>
                            <p className='bg-gradient-to-r from-primary/20 to-primary/50 p-3 rounded-lg'>Can you show me a summary of today's sales?</p>
                        </div>
                        <Image src={'/asset/user.jpg'} alt="orb" width={1200} height={1200} className='w-10 h-10 rounded-full object-cover mx-auto mt-6' />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;