import React from 'react'
import Main from '@/components/Main';

const page = () => {
  return (
    <div className='w-[1200px] m-auto max-lg:w-[80%]'>
      <div className='flex max-lg:flex-col gap-6 items-start justify-center'>
        <div className='flex flex-col gap-4 max-lg:text-sm'>
          <p> 1997'de Sakarya'da doğdu.
            Afyon Kocatepe Üniversitesi Radyo ve Televizyon Programcılığı ve Sinema TV bölümünde eğitim gördü.
            Halen Anadolu Üniversitesi Büro Yönetimi Ve Yönetici Asistanlığı bölümünde eğitim almaktadır.</p>
          <p>  Antalya Film Okulu, The Sundance Institues Filmmaking Masterclasses gibi kurslardan Senaryo yazımı, Kurgu, Belgesel yapımı, Sinema ve sanat tarihi gibi çeşitli dersler aldı.
            Superprof, Udemy ve yerel olarakkısa film yapımı, senaryo nasıl yazılır gibi çeşitli online kurslar verilmekte.
            Yerel ve kendi internet radyosunda Radyo sunuculuğu ve yapımcı olarak yer aldı. Amatör olarak kısa film yapımı, podcast yapımı ve radyo tiyatrosu yapımları ile ilgileniyor.</p>
        </div>

        <img src="https://img.imgyukle.com/2023/11/25/yxdkYQ.jpeg" className='w-[500px] clippedl-image' alt="kerem korkmaz radyo" />
      </div>
      <Main />
    </div>
  )
}

export default page