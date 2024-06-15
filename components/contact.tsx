"use client";

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from "framer-motion"
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {

    const { ref } = useSectionInView("Contact"); 

    return (
        <motion.section id="contact" ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}>
            <SectionHeading>Contact</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/90">
                You can contact me directly at {" "}
                <a className="underline" href="mailto:manojnarender@u.nus.edu">manojnarender@u.nus.edu</a>
                {" "} or through this form.
            </p>

            <form className="mt-10 flex flex-col dark:text-gray-700/90"
            action={async (formData) => {
                await sendEmail(formData);
            }}>
                <input type="email"
                required
                name="senderEmail"
                maxLength={500}
                placeholder="Your email" className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" />
                <textarea 
                required
                name="message"
                maxLength={500}
                placeholder="Your message" className="h-52 my-3 rounded-lg border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" />
                <button type="submit" className="flex group h-[3rem] w-[8rem] rounded-full bg-gray-900 text-white outline-none transition-all items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10">Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></button>
            </form>
        </motion.section>
    )
}
