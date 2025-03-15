import React from 'react';

const SectionTitle = ({title, subTitle, style}: {title: string, subTitle: string, style?: string}) => {
    return (
        <div className={`${style} w-full  mx-auto text-center flex flex-col gap-2 md:gap-4`}>
           <h2>{title}</h2>
            <h3 className='w-11/12 md:w-4/5 lg:w-3/4 mx-auto text-primaryText/80'>{subTitle}</h3>
        </div>
    );
};

export default SectionTitle;