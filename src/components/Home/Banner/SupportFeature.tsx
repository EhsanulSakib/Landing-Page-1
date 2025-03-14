import React from 'react';
import { IoStarSharp } from "react-icons/io5";
const SupportFeature = () => {
    const supports = [
        "24/7 AVAILABILITY",
        "INSTANT AI CHATBOT SETUP",
        "PERSONALIZED INTERACTIONS",
        "MULTICHANNEL SUPPORT",
    ]
    return (
        <div className='flex items-center flex-wrap justify-center md:justify-evenly gap-2 mt-20 lg:mt-28 p-2 bg-gradient-to-b from-primary/10 to-primary/30'>
            {
                supports.map((support, index) => (
                    <div key={index} className='flex items-center justify-center gap-2 '>
                         <IoStarSharp className='-mt-[2px] text-xs md:text-sm xl:text-lg'/>
                        <p className='text-xs md:text-sm xl:text-lg'>{support}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SupportFeature;