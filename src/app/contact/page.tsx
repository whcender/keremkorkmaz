import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaVimeo, FaSpotify, FaImdb  } from "react-icons/fa";
import { ImSoundcloud2 } from "react-icons/im";
import { SiMedium } from "react-icons/si";
import Main from '@/components/Main';

const page = () => {
    return (
        <div className='lg:w-[1200px] m-auto px-4'>
            <h4 className='font-semibold text-center'>İletişime Geçin</h4>
            <div className='w-[300px]  m-auto flex items-center flex-wrap justify-center mt-20'>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://www.facebook.com/thekeremkorkmaz"}>
                        <FaFacebook size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://www.instagram.com/thekeremkorkmaz"}>
                        <FaInstagram size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://twitter.com/thekeremkorkmaz"}>
                        <FaTwitter size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://www.youtube.com/@thekeremkorkmaz"}>
                        <FaYoutube size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://vimeo.com/keremkorkmaz"}>
                        <FaVimeo size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://open.spotify.com/user/thekeremkorkmaz"}>
                        <FaSpotify size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://medium.com/@keremkorkmaz"}>
                        <SiMedium size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://www.imdb.com/user/ur68685099/?ref_=nb_usr_prof_0&fbclid=IwAR0H5BzY69b8Eb5eFBallSTEtqPT6Tbg8T833rDTmqd3sAp1VofRcFTpZy0"}>
                        <FaImdb  size={60} /></Link>
                </div>
                <div className='border w-max p-4 hover:bg-black hover:text-white'>
                    <Link target="_blank" href={"https://soundcloud.com/thekeremkorkmaz"}>
                        <ImSoundcloud2  size={60} /></Link>
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