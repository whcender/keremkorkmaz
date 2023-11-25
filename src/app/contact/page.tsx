import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaVimeo, FaSpotify } from "react-icons/fa";
import Main from '@/components/Main';

const page = () => {
    return (
        <div className='lg:w-[1200px] m-auto px-4'>
            <h4 className='font-semibold text-center'>İletişime Geçin</h4>
            <div className='w-[300px]  m-auto flex items-center flex-wrap justify-center mt-20'>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link href={"https://www.facebook.com/thekeremkorkmaz"}>
                        <FaFacebook size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link href={"https://www.facebook.com/thekeremkorkmaz"}>
                        <FaInstagram size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link href={"https://www.facebook.com/thekeremkorkmaz"}>
                        <FaTwitter size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link href={"https://www.facebook.com/thekeremkorkmaz"}>
                        <FaYoutube size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link href={"https://www.facebook.com/thekeremkorkmaz"}>
                        <FaVimeo size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link href={"https://www.facebook.com/thekeremkorkmaz"}>
                        <FaSpotify size={60} /></Link>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10 gap-5 max-lg:text-sm mb-10'>
                <h5 className='font-bold'>Mail Adresim:</h5>
                <p>thekeremkorkmaz@gmail.com</p>
            </div>
            <Main />

        </div>
    )
}

export default page