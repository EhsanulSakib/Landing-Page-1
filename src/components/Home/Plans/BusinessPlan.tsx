import CommonButton from '@/components/(shared)/Button/CommonButton';
import React from 'react';
import { TiTick } from "react-icons/ti";

const BusinessPlan = () => {
    return (
        <div className='min-h-[600px] xl:min-h-[500px] w-full max-w-[600px] flex flex-col bg-gradient-to-br from-background/20 to-primary/40 rounded-lg shadow-lg shadow-primary/40 border border-primary/10'>
            <div className='p-3 xl:p-6 flex justify-between w-full items-end border-b border-primaryText/50'>
                <div>
                    <h3 className='font-bold text-2xl'>Business Plan</h3>
                    <p className='text-primaryText/70'>Advanced features and reporting.</p>
                </div>

                <div className='flex items-start'>
                    <h2 className='mt-1 lg:text-3xl xl:text-4xl'>$</h2>
                    <h1>20</h1>
                    <p className='self-end mb-2 ml-1'>per month</p>
                </div>
            </div>


            <div className='p-3 xl:p-6  flex flex-col gap-1'>
                <div>
                    <h3 className='font-semibold'>FEATURES</h3>
                    <p className='text-primaryText/70'>Everything in our basic plan plus...</p>
                </div>

                <ul className='flex gap-4 mt-4'>
                    <div className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> 200+ integrations</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Advanced reporting</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Up to 20 individual users</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> 40GB individual data</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Priority chat Support</li>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Advanced custom fields</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Audit log and data history</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Backup your account</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Personalized service</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> + many more...</li>
                    </div>
                </ul>

            </div>

            <div className='px-6 py-4 mt-auto border-t border-primaryText/50'>
                <CommonButton title="Get Started" link='/login' style='border border-primary bg-primary text-primaryText hover:bg-primary/70 transition ease-in-out duration-500 w-full' />
            </div>

        </div>
    );
};

export default BusinessPlan;