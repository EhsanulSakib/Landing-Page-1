import GlowingAnimation from '@/components/(shared)/Animation/GlowingAnimation';
import Image from 'next/image';
import React from 'react';

const ChatFeature = () => {
    return (
        <div className='relative w-full'>
            <Image
                src={'/asset/orb.png'}
                alt="orb"
                width={1200}
                height={1200}
                className="w-[55%] md:w-[50%] lg:w-[40%] xl:w-[35%] mx-auto mt-20 md:mt-12 lg:mt-16 xl:mt-24 animate-spin"
                style={{ animationDuration: '90s' }} // Slower spin effect
            />
            <div className='absolute w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%] mx-autoscale-110 h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full radial-gradient -z-[20] blur-2xl'></div>
            <section className='absolute flex flex-col gap-4 md:gap-8 lg:gap-12 w-11/12 xl:w-[60%] mx-auto h-full top-1/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <GlowingAnimation>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='flex flex-col gap-1 items-end w-full'>
                            <p>Jhon</p>
                            <p className='bg-gradient-to-r from-primary/80 to-background/80 p-2 lg:p-3 rounded-lg border-b-2 border-r-2 shadow-md border-secondary/30'>Can you show me a summary of today's sales?</p>
                        </div>
                        <Image src={'/asset/user.jpg'} alt="orb" width={1200} height={1200} className='w-12 h-12 rounded-full object-cover mx-auto mt-7' />
                    </div>
                </GlowingAnimation>

                <GlowingAnimation>
                    <div className='flex justify-center items-start gap-2 w-64 lg:w-96'>
                        <Image src={'/asset/orb.png'} alt="orb" width={1200} height={1200} className='w-12 h-12 rounded-full object-cover mx-auto mt-2 p-1 bg-primary/60' />
                        <div className='flex flex-col items-start bg-gradient-to-l from-primary/80 to-background/80 p-2 lg:p-3 rounded-lg w-full border-b-2 border-l-2 shadow-md border-secondary/30'>
                            <p> Sure, here's a summary of today's sales:</p>
                            <p className='flex w-full justify-between mt-1'>Total sales: <span>$2,500</span></p>
                            <p className='flex w-full justify-between'>Order Placed: <span>150</span></p>
                            <p className='flex w-full justify-between'>Average Order Value: <span>$25</span></p>
                            <p className='flex w-full justify-between'>Conversion Rate: <span>5%</span></p>

                            <p className='mt-2'>Would you like to to see more details?</p>
                        </div>
                    </div>
                </GlowingAnimation>

                <GlowingAnimation>
                    <div className='flex justify-center items-center gap-2 -mt-4'>
                        <div className='flex flex-col gap-1 items-end w-full'>
                            <p>Jhon</p>
                            <p className='bg-gradient-to-r from-primary/80 to-background/80 p-2 lg:p-3 rounded-lg border-b-2 border-r-2 shadow-md border-secondary/30'>That's what I needed. Thanks for your assistance.</p>
                        </div>
                        <Image src={'/asset/user.jpg'} alt="orb" width={1200} height={1200} className='w-12 h-12 rounded-full object-cover mx-auto mt-7' />
                    </div>
                </GlowingAnimation>
            </section>
        </div>
    );
};

export default ChatFeature;