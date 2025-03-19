import SectionTitle from '@/components/(shared)/Titles/SectionTitle';
import Image from 'next/image';
import React from 'react';
import { PiSquaresFour } from "react-icons/pi";

const ThirdFeaturesSection = () => {
    const title = "What Sets Orbeacon Apart from Other Platforms?"
    const subTitle = "Orbeacon empowers business with seamless bot creation, customizable assistants, easy integration, and automation across platforms."
    return (
        <div className='w-full'>
            <SectionTitle title={title} subTitle={subTitle} />
            <section className='mt-8 lg:mt-16 w-full flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-8'>
                <div className='min-h-[500px] w-full md:w-4/5 flex flex-col p-6 bg-gradient-to-tl from-tertiary/10 to-primary/40 rounded-xl'>
                    <div className='flex gap-2 items-center'>
                        <PiSquaresFour className='text-3xl w-10 lg:w-12 h-10 lg:h-12 bg-primary text-primaryText p-2 rounded-full' />
                        <h3 className='font-bold'>AIO SOLUTIONS</h3>
                    </div>

                    <div>
                        <Image src={'/asset/aio.png'} alt="automation" width={1200} height={1200} className='w-64 mx-auto py-8 rounded-xl' />
                    </div>

                    <div>
                        <h3 className='font-bold'>Customizable Solutions</h3>
                        <p className='text-primaryText/70'>Tailor Your Experience with Our Flexible Features Designed to Meet Your Unique Needs!</p>
                    </div>

                </div>

                <div className='min-h-[500px] w-full flex flex-col p-6 bg-gradient-to-tl from-tertiary/10 to-primary/40 rounded-xl'>
                    <div className='flex gap-2 items-center'>
                        <PiSquaresFour className='text-3xl w-10 lg:w-12 h-10 lg:h-12 bg-primary text-primaryText p-2 rounded-full' />
                        <h3 className='font-bold'>AIO SOLUTIONS</h3>
                    </div>

                    <div>
                        <Image src={'/asset/aio.png'} alt="automation" width={1200} height={1200} className='w-64 mx-auto py-8 rounded-xl' />
                    </div>

                    <div className='pr-6'>
                        <h3 className='font-bold'>Customizable Solutions</h3>
                        <p className='text-primaryText/70'>Tailor Your Experience with Our Flexible Features Designed to Meet Your Unique Needs!</p>
                    </div>
                </div>
            </section>
            <section className='mt-4 lg:mt-8 w-full flex flex-col md:flex-row-reverse justify-between items-center gap-4 lg:gap-8'>
                <div className='min-h-[500px] w-full md:w-4/5 flex flex-col p-6 bg-gradient-to-tl from-tertiary/10 to-primary/40 rounded-xl'>
                    <div className='flex gap-2 items-center'>
                        <PiSquaresFour className='text-3xl w-10 lg:w-12 h-10 lg:h-12 bg-primary text-primaryText p-2 rounded-full' />
                        <h3 className='font-bold'>AIO SOLUTIONS</h3>
                    </div>

                    <div>
                        <Image src={'/asset/aio.png'} alt="automation" width={1200} height={1200} className='w-64 mx-auto py-8 rounded-xl' />
                    </div>

                    <div>
                        <h3 className='font-bold'>Customizable Solutions</h3>
                        <p className='text-primaryText/70'>Tailor Your Experience with Our Flexible Features Designed to Meet Your Unique Needs!</p>
                    </div>

                </div>

                <div className='min-h-[500px] w-full flex flex-col p-6 bg-gradient-to-tl from-tertiary/10 to-primary/40 rounded-xl'>
                    <div className='flex gap-2 items-center'>
                        <PiSquaresFour className='text-3xl w-10 lg:w-12 h-10 lg:h-12 bg-primary text-primaryText p-2 rounded-full' />
                        <h3 className='font-bold'>AIO SOLUTIONS</h3>
                    </div>

                    <div>
                        <Image src={'/asset/aio.png'} alt="automation" width={1200} height={1200} className='w-64 mx-auto py-8 rounded-xl' />
                    </div>

                    <div className='pr-6'>
                        <h3 className='font-bold'>Customizable Solutions</h3>
                        <p className='text-primaryText/70'>Tailor Your Experience with Our Flexible Features Designed to Meet Your Unique Needs!</p>
                    </div>
                </div>
            </section> 
        </div>
    );
};

export default ThirdFeaturesSection;