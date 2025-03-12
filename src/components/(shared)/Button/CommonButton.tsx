import React from 'react';

const CommonButton = ({title, link, style}: {title: string, link?: string, style?: string}) => {
    return (
        <button className={`${style} primary-btn `}>
            {title}
        </button>
    );
};

export default CommonButton;