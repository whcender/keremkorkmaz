import Link from 'next/link'
import { FaFilm } from "react-icons/fa";

import React from 'react'

const index = () => {
  return (
    <div className='flex flex-col gap-3 text-center items-center mt-3 mb-10 max-lg:mb-24 '>
        <Link href={"/"}>
        <h1 className='text-3xl font-black max-lg:text-2xl text-yellow-400'>Kerem Korkmaz</h1></Link>
        <FaFilm size={30}/>
        <p className='text-gray-900 uppercase text-sm max-lg:text-xs font-semibold'>Yazar - Senarist - Radyocu - Yönetmen</p>
    </div>
  )
}

export default index