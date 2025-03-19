import SectionTitle from '@/components/(shared)/Titles/SectionTitle';
import React from 'react';
import BasicPlan from './BasicPlan';
import BusinessPlan from './BusinessPlan';

const Plan = () => {
    const title = "Plans that fit your scale"
    const subTitle = "Simple, transparent pricing that grows with you."
    return (
        <div className='w-11/12 mx-auto flex flex-col'>
            <SectionTitle title={title} subTitle={subTitle} />

            <section className='mt-8 lg:mt-16 w-11/12 lg:w-5/6 xl:w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12'>
                <BasicPlan/>
                <BusinessPlan/>
            </section>
        </div>
    );
};

export default Plan;