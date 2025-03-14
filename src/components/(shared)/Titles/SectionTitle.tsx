import React from 'react';

const SectionTitle = ({title, subTitle, style}: {title: string, subTitle: string, style?: string}) => {
    return (
        <div className={`${style} w-full  mx-auto text-center flex flex-col gap-2 md:gap-4`}>
           <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </div>
    );
};

export default SectionTitle;