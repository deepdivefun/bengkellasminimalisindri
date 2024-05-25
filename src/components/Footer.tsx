import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='h-96 px-12 py-12'>
        <div className='grid grid-cols-6'> 
          <div className='col-span-3'>
            <h1 className='text-4xl'>Bengkel Las & Minimalis</h1> 
          </div>
          <div className='col-span-3'>
            <div className='flex justify-center'>
              <ul className='grid grid-rows-1 gap-6'>
                  <li>Beranda</li>
                  <li>Layanan</li>
                  <li>Tentang</li>
                  <li>Kontak</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className='text-center mt-20'>Di buat oleh : Faisal</h1>
      </div>
    </>
  )
}

export default Footer