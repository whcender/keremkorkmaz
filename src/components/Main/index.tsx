import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div className='flex items-center font-medium uppercase justify-center mt-10 max-lg:mt-2 max-lg:gap-3 max-lg:flex-col '>
        <Link className='border border-black w-36 max-lg:w-[80%] text-center' href={"/about"}>Hakkımda</Link>
        <div className='h-[2px] w-2 bg-black max-lg:hidden'></div>
        <Link className='border border-black w-36 max-lg:w-[80%] text-center' href={"/myproject"}>Projelerim</Link>
        <div className='h-[2px] w-2 bg-black max-lg:hidden'></div>
        <Link className='border border-black w-36 max-lg:w-[80%] text-center' href={"/contact"}>İletişim</Link>
    </div>
  )
}

export default index