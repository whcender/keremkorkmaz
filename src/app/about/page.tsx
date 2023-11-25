import React from 'react'

const page = () => {
  return (
    <div className='flex gap-6 w-[1200px] m-auto items-start justify-center max-lg:flex-col max-lg:w-[80%] h-[600px]'>
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
  )
}

export default page