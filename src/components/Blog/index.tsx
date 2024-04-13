import React from 'react'

const index = () => {
  return (
    <div className='flex gap-6 w-[1200px] m-auto items-start justify-center max-lg:flex-col max-lg:w-[80%]'>
        <div>
            <p className='w-[500px] max-lg:w-[100%] max-lg:text-sm '>Merhaba, ben Kerem. Sakarya Kent FM'in kurucusu, radyo sunucusu ve genel yayın yönetmeniyim. Aynı zamanda Resital Dijital yapım şirketinde kısa ve uzun metrajlı filmler, internet dizileri ve Late Night Talk Show programları ,podcast yapımları ve radyo tiyatrosu yapımları üretiyorum. Kendi kurduğum Hamur Humour Komedi Kulübü'nde The Comedy Clubhouse ve Açık Mikrofon geceleri düzenliyorum ve kendi tek kişilik gösterimi sergiliyorum. Ayrıca, Dramatik Sanatlar Akademisi'nde kısa film yapımı, senaryo yazımı ve tiyatro oyunculuğu gibi teknik eğitimler veriyorum.</p>
        </div>
        <img className='w-[400px] clipped-image' src="/main.jpg" alt="kerem" />
    </div>
  )
}

export default index
