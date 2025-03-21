'use client';

import SectionTitle from '@/components/(shared)/Titles/SectionTitle';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion } from 'framer-motion';

const faqs = [
    {
        question: 'Is there a free trial available?',
        answer:
            'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    { question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan at any time.' },
    { question: 'What is your cancellation policy?', answer: 'You can cancel anytime, and your subscription will remain active until the end of your billing cycle.' },
    { question: 'Can other info be added to an invoice?', answer: 'Yes, you can add company details or VAT ID to your invoice.' },
    { question: 'How does billing work?', answer: 'We charge your payment method on file at the beginning of each billing cycle.' },
    { question: 'How do I change my account email?', answer: 'You can update your email from the account settings page.' },
];

export default function FAQ() {
    const title = "Frequently asked questions"
    const subTitle = "Everything you need to know about the product and billing."
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id='faq' className="flex flex-col w-11/12 lg:w-5/6 xl:w-3/4 mx-auto justify-between items-center gap-8 lg:gap-12">
            <SectionTitle title={title} subTitle={subTitle} />

            <div className="mt-8 w-full flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 w-full">
                        {/* Button to Toggle FAQ */}
                        <button
                            className="w-full flex justify-between items-center py-4 px-6 text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-lg font-medium flex-wrap">{faq.question}</span>
                            {openIndex === index ? (
                                <AiOutlineMinus className="text-xl text-gray-400" />
                            ) : (
                                <AiOutlinePlus className="text-xl text-gray-400" />
                            )}
                        </button>

                        {/* Animated Answer Section */}
                        <motion.div
                            className="overflow-hidden px-6 flex-wrap"
                            initial={{ height: 0, opacity: 0 }}
                            animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <p className="text-gray-300 pb-4 w-full">{faq.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
