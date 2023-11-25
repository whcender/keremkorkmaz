import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const index = () => {
    return (
        <div className='flex flex-col lg:items-center gap-3 font-popins mt-9 px-3 mb-3'>
            <div className='h-[2px] w-24 bg-black'></div>
            <h2 className='font-bold text-2xl max-lg:text-xl'>Kerem Korkmaz</h2>
            <p className='max-lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate amet voluptatem odio necessitatibus.</p>
            <div className='h-[2px] w-40 bg-black max-lg:hidden'></div>
            <div className='gap-5 flex justify-center'>
                <a target="_blank" href="https://www.facebook.com/thekeremkorkmaz"><FaFacebook size={23} /></a>
                <a target="_blank" href="https://www.instagram.com/thekeremkorkmaz"><FaInstagram size={23} /></a>
                <a target="_blank" href=""><FaTwitter size={23} /></a>
                <a target="_blank" href=""><FaYoutube size={23} /></a>
            </div>
        </div>
    )
}

export default index