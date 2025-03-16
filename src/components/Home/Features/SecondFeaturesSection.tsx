import SectionTitle from '@/components/(shared)/Titles/SectionTitle';
import Image from 'next/image';
import React from 'react';
import { IoChatbubblesSharp } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineAutoMode } from "react-icons/md";
const SecondFeaturesSection = () => {
    const title = "Accelerate Your Business Growth with Orbeacon!"
    const subTitle = "Harness the Power of AI to Streamline Your Workflow, Enhance Collaboration, and Drive Sustainable Business Growth!"
    return (
        <div>
            <SectionTitle title={title} subTitle={subTitle} />

            <section className='w-11/12 mx-auto md:w-full mt-12 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-24'>
                <div className='w-full flex flex-col gap-2 md:gap-4'>
                    <IoChatbubblesSharp className='text-3xl w-10 md:w-12 h-10 md:h-12 bg-primary text-primaryText p-2 rounded-full' />
                    <h2>24/7 Automated Support</h2>
                    <h3 className='text-primaryText/60'>Ensure your business is always available with 24/7 support, keeping customers satisfied any time of day.</h3>
                    <ul className='flex flex-col gap-2 ml-4 text-primaryText/60'>
                        <h3 className='flex items-center gap-4'><SiTicktick className='text-primary' /> Deliver real-time support whenever customers need help.</h3>
                        <h3 className='flex items-center gap-4 text-primaryText/60'><SiTicktick className='text-primary' /> Operate without downtime across all time zones.</h3>
                        <h3 className='flex items-center gap-4 text-primaryText/60'><SiTicktick className='text-primary' />Increase satisfaction with fast and accurate responses.</h3>
                    </ul>
                </div>

                <div className='w-full pt-12 2xl:pt-20 px-12 bg-gradient-to-bl from-tertiary/10 to-primary/40 rounded-xl '>
                    <Image src={'/asset/customer-profile.png'} alt="customer-profile" width={500} height={500} className='mx-auto rounded-xl' />
                </div>
            </section>

            <section className='w-11/12 mx-auto md:w-full mt-12 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-8 md:gap-16 lg:gap-24'>
                <div className='w-full flex flex-col gap-2 md:gap-4'>
                    <AiFillThunderbolt className='text-3xl w-10 md:w-12 h-10 md:h-12 bg-primary text-primaryText p-2 rounded-full' />
                    <h2>Boost Sales & Elevate Performance</h2>
                    <h3 className='text-primaryText/60'>Use AI-powered interactions to guide customers, upsell products, and minimize every stage of their journey.</h3>
                    <ul className='flex flex-col gap-2 ml-4 text-primaryText/60'>
                        <h3 className='flex items-center gap-4'><SiTicktick className='text-primary' /> Drive conversions through personalized real-time chats.</h3>
                        <h3 className='flex items-center gap-4 text-primaryText/60'><SiTicktick className='text-primary' /> Provide smart product recommendations based on behavior.</h3>
                        <h3 className='flex items-center gap-4 text-primaryText/60'><SiTicktick className='text-primary' />Speed up decision-making for quick sales.</h3>
                    </ul>
                </div>

                <div className='w-full pt-12 2xl:pt-20 px-12 bg-gradient-to-tr from-tertiary/10 to-primary/40 rounded-xl '>
                    <Image src={'/asset/graph.png'} alt="graph" width={500} height={500} className='mx-auto rounded-xl' />
                </div>
            </section>

            <section className='w-11/12 mx-auto md:w-full mt-12 md:mt-16 lg:mt-20 xl:mt-24 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-24'>
                <div className='w-full flex flex-col gap-2 md:gap-4'>
                    <MdOutlineAutoMode className='text-3xl w-10 md:w-12 h-10 md:h-12 bg-primary text-primaryText p-2 rounded-full' />
                    <h2>Automate Your Business for Efficiency</h2>
                    <h3 className='text-primaryText/60'>Automate routine tasks, freeing your team to focus on what matters most.</h3>
                    <ul className='flex flex-col gap-2 ml-4 text-primaryText/60'>
                        <h3 className='flex items-center gap-4'><SiTicktick className='text-primary' /> Streamline workflows to save time and reduce manual work.</h3>
                        <h3 className='flex items-center gap-4 text-primaryText/60'><SiTicktick className='text-primary' /> Minimize human errors for consistent processes.</h3>
                        <h3 className='flex items-center gap-4 text-primaryText/60'><SiTicktick className='text-primary' /> Boost productivity by automating repetitive tasks.</h3>
                    </ul>
                </div>

                <div className='w-full pt-12 2xl:pt-20 px-12 bg-gradient-to-tr from-tertiary/10 to-primary/40 rounded-xl'>
                    <Image src={'/asset/automation.png'} alt="automation" width={500} height={500} className='mx-auto rounded-xl' />
                </div>
            </section>
        </div>
    );
};

export default SecondFeaturesSection;