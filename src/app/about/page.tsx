import React from 'react'

const page = () => {
  return (
    <div className='w-[1200px] m-auto max-lg:w-[80%]'>
      <div className='flex max-lg:flex-col gap-6 items-start justify-center mb-10'>
        <div className='flex flex-1 flex-col gap-4 max-lg:text-sm'>
          <p> 1997 yılında Sakarya'da doğdu. Afyon Kocatepe Üniversitesi'nde Radyo ve Televizyon Programcılığı ile Sinema TV bölümünde eğitim aldı. Halen Anadolu Üniversitesi'nde Büro Yönetimi ve Yönetici Asistanlığı bölümünde eğitimine devam ediyor.</p>
          <p> Antalya Film Okulu ve The Sundance Institute'in Filmmaking Masterclasses gibi kurslarda senaryo yazımı, kurgu, belgesel yapımı, sinema ve sanat tarihi gibi çeşitli dersler aldı. Ayrıca Superprof, Udemy ve Dramatik Sanatlar Akademisi gibi platformlarda kısa film yapımı, senaryo yazımı gibi çeşitli online kurslar veriyor.
</p><p>Kendi internet radyosu olan Sakarya Kent FM'de radyo sunuculuğu ve genel yayın yönetmenliği yapıyor. Kısa ve uzun metrajlı filmler, internet dizileri ve Late Night Talk Show programları podcast yapımı ve radyo tiyatrosu yapımları üretiyor. Ayrıca kurduğu Hamur Humour Komedi Kulübü'nde The Comedy Clubhouse ve Açık Mikrofon geceleri gibi etkinlikler düzenliyor ve kendi tek kişilik gösterisini sergiliyor.</p>
        </div>

        <img src="/about.jpg" className='w-[400px] object-cover  clippedl-image' alt="kerem korkmaz radyo" />
      </div>
    </div>
  )
}

export default page
