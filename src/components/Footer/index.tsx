import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const index = () => {
    return (
        <div className='flex flex-col lg:items-center gap-3 font-popins mt-9 px-3'>
            <div className='h-[2px] w-24 bg-black'></div>
            <h2 className='font-bold text-2xl max-lg:text-xl'>Kerem Korkmaz</h2>
            <p className='max-lg:text-sm opacity-85 text-base'>Tüm hakları Kerem Korkmaza aittir.</p>
            <div className='h-[2px] w-40 bg-black max-lg:hidden'></div>
            <div className='gap-5 flex justify-center'>
                <a className='text-blue-600' target="_blank" href="https://www.facebook.com/thekeremkorkmaz"><FaFacebook size={23} /></a>
                <a className='text-purple-500' target="_blank" href="https://www.instagram.com/thekeremkorkmaz"><FaInstagram size={23} /></a>
                <a className='text-blue-400' target="_blank" href="https://twitter.com/thekeremkorkmaz"><FaTwitter size={23} /></a>
                <a className='text-red-600'target="_blank" href="https://www.youtube.com/@thekeremkorkmaz"><FaYoutube size={23} /></a>
            </div>
        </div>
    )
}

export default index
