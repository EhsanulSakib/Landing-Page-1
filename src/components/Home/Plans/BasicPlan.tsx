import CommonButton from '@/components/(shared)/Button/CommonButton';
import React from 'react';
import { TiTick } from "react-icons/ti";

const BasicPlan = () => {
    return (
        <div className='min-h-[500px] w-full max-w-[600px] flex flex-col bg-gradient-to-br from-background/20 to-primary/40 rounded-lg shadow-lg shadow-primary/40 border border-primary/10'>
            <div className='p-6 flex justify-between w-full items-end border-b border-primaryText/50'>
                <div>
                    <h3 className='font-bold text-2xl'>Basic Plan</h3>
                    <p className='text-primaryText/70'>Our most popular plan for small teams.</p>
                </div>

                <h1>Free</h1>
            </div>


            <div className='p-6 flex flex-col gap-1'>
                <div>
                    <h3 className='font-semibold'>FEATURES</h3>
                    <p className='text-primaryText/70'>Everything you need to know about our basic plan...</p>
                </div>

                <ul className='flex gap-4 mt-4'>
                    <div className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Access to basic features</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Basic reporting + analytics</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Up to 10 individual users</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> 20GB individual data</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Basic chat Support</li>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Attend events</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Automatic updates</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Backup your account</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Audit log and notes</li>

                        <li className='flex items-center gap-2 text-primaryText/70'> <TiTick  className='w-4 h-4 bg-primary rounded-md'/> Feature requests</li>
                    </div>
                </ul>

            </div>

            <div className='px-6 py-4 border-t border-primaryText/50 mt-auto'>
                <CommonButton title="Get Started" link='/login' style='border border-primary bg-primary text-primaryText hover:bg-primary/70 transition ease-in-out duration-500 w-full' />
            </div>

        </div>
    );
};

export default BasicPlan;