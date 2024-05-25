import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='px-6 py-12'>
        <div className='md:grid grid-cols-6'> 
          <div className='col-span-3'>
            <h1 className='md:text-4xl'>Bengkel Las & Minimalis</h1> 
          </div>
          <div className='col-span-3'>
            <div className='md:flex md:justify-center'>
              <ul className='grid grid-rows-1 gap-6 mt-6'>
                  <li>Beranda</li>
                  <li>Layanan</li>
                  <li>Tentang</li>
                  <li>Kontak</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className='text-center mt-20'></h1>
      </div>
    </>
  )
}

export default Footer