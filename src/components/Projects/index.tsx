// components/Index.tsx

import React from 'react';

// products.json dosyasını içe aktar
import data from '@/data/products.json';

interface Product {
  isim: string;
  link: string;
  fotoğraf?: string;
  resim?: string;
  açıklama: string;
}

interface ProductList {
  kitaplar: Product[];
  kisa_filmler: Product[];
  blog_yazilari: Product[];
}

const Index: React.FC = () => {
  return (
    <div className="container mx-auto my-8 px-2">
      <section>
        <h2 className="text-3xl font-bold mb-4">Kitaplar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-md:px-6">
          {data.kitaplar.map((kitap: Product, index: number) => (
            <div className="bg-white p-4 rounded-md shadow-md" key={index}>
              <h3 className="text-xl font-semibold mb-2">{kitap.isim}</h3>
              <a href={kitap.link} target="_blank" rel="noopener noreferrer">
                <img src={kitap.fotoğraf} alt={kitap.isim} className="mb-2 rounded-md w-[170px]" />
              </a>
              <p>{kitap.açıklama}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold my-4">Kısa Filmler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-md:px-6">
          {data.kisa_filmler.map((film: Product, index: number) => (
            <div className="bg-white p-4 rounded-md shadow-md  " key={index}>
              <h3 className="text-xl font-semibold mb-2">{film.isim}</h3>
              <a href={film.link} target="_blank" rel="noopener noreferrer">
                <img src={film.resim} alt={film.isim} className="mb-2 rounded-md" />
              </a>
              <p>{film.açıklama}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold my-4">Blog Yazıları</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-md:px-6">
          {data.blog_yazilari.map((blog: Product, index: number) => (
            <div className="bg-white p-4 rounded-md shadow-md" key={index}>
              <h3 className="text-xl font-semibold mb-2">{blog.isim}</h3>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <p>{blog.açıklama}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Diğer bölümler buraya eklenebilir */}
    </div>
  );
};

export default Index;
