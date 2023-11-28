import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div className='flex items-center font-medium uppercase justify-center mt-10 max-lg:mt-2 max-lg:gap-3 max-lg:flex-col mb-10 text-lg'>
        <Link className='border rounded-lg border-black bg-black text-white w-36 max-lg:w-[80%] text-center hover:font-semibold' href={"/about"}>Hakkımda</Link>
        <div className='h-[2px] w-2 bg-black max-lg:hidden'></div>
        <Link className='border rounded-lg border-black bg-black text-white w-36 max-lg:w-[80%] text-center hover:font-semibold' href={"/myproject"}>Projelerim</Link>
        <div className='h-[2px] w-2 bg-black max-lg:hidden'></div>
        <Link className='border rounded-lg border-black bg-black text-white w-36 max-lg:w-[80%] text-center hover:font-semibold' href={"/contact"}>İletişim</Link>
    </div>
  )
}

export default index