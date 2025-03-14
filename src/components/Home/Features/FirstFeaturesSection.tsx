import SectionTitle from '@/components/(shared)/Titles/SectionTitle';
import Image from 'next/image';
import React from 'react';

const FirstFeaturesSection = () => {
    const title = "Transform Project Management with AI Precision"
    const subTitle = "Orbeacon automates and enhances project workflows for better results."
    return (
        <div className='w-full'>
            <SectionTitle title={title} subTitle={subTitle} />

            <section className='mt-4 md:mt-8 w-full flex flex-col-reverse md:flex-row justify-between items-center gap-2 md:gap-8 lg:gap-24'>
                <section className='w-full xl:w-3/5 flex flex-col gap-4 lg:gap-8'>
                    <div className="relative p-6 rounded-lg flex flex-col gap-2 transition ease-in-out duration-500 cursor-pointer group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg pointer-events-none"></div>
                        <h3 className="font-bold relative z-10">Smart Task Assignment</h3>
                        <p className="relative z-10">AI-powered task recommendations tailored to team skills and availability.</p>
                    </div>

                    <div className="relative p-6 bg-gradient-to-tr from-background/20 to-primary/40 rounded-lg flex flex-col gap-2 transition ease-in-out duration-500 cursor-pointer shadow-md shadow-primary/30">
                        <h3 className="font-bold relative z-10">Real-Time Analytics & Collaboration</h3>
                        <p className="relative z-10">Instantly access to your project data insights to make informed decisions on the go.</p>
                    </div>

                    <div className="relative p-6 rounded-lg flex flex-col gap-2 transition ease-in-out duration-500 cursor-pointer group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg pointer-events-none"></div>
                        <h3 className="font-bold relative z-10">Seamless Integration</h3>
                        <p className="relative z-10">Connect with your favorite tools for uninterrupted workflows and instantly start interacting with customers.</p>
                    </div>

                </section>

                <section className='w-4/5'>
                    <Image src={'/asset/orb.png'} alt="orb" width={600} height={600} className='mt-4 md:mt-0 ml-auto' />
                </section>
            </section>
        </div>
    );
};

export default FirstFeaturesSection;