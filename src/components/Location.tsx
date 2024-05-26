"use client"

import React from 'react'
import { Map  }from './Map'
import Link from "next/link";
  
const Location = () => {
   
    
      return (
        <div className='mx-6 md:mt-12 mt-6'>
            <h3 className='mb-6 font-semibold'>Lokasi Pelanayan Kami</h3>
            <div className='md:grid grid-cols-6 justify-between gap-12'>
                <div className='col-span-3'>
                  <Map/>
                </div>
                <div className='border p-3 col-span-3 mt-6'>
                    <div className='grid gap-16'>
                        <div className='flex gap-16' >
                          <img src="/google-maps.png" className='w-24 h-24' alt="" />
                            <div>
                              <Link href='/jakarta'>
                                <h1 className='text-2xl font-bold mb-3'>Jakarta</h1>
                                <span>Kami juga melayani daerah jakarta, Kunjungi Kami </span>
                              </Link>
                            </div>
                        </div>
                        <div className='flex gap-16' >
                          <img src="/google-maps.png" className='w-24 h-24' alt="" />
                            <div>
                              <Link href='/cikarang'>
                                <h1 className='text-2xl font-bold mb-3'>Cikarang</h1>
                                <span>Kami juga melayani daerah Cikarang, Kunjungi Kami </span>
                              </Link>
                            </div>
                        </div>
                        <div className='flex gap-16' >
                          <img src="/google-maps.png" className='w-24 h-24' alt="" />
                            <div>
                              <Link href='/bekasi'>
                                <h1 className='text-2xl font-bold mb-3'>Bekasi</h1>
                                <span>Kami juga melayani daerah Bekasi, Kunjungi Kami </span>
                              </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ) 
    }
    

export default Location