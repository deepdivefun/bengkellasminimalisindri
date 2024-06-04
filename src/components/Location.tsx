import React from 'react'
import { Map  }from './Map'
import Link from "next/link";
  
const Location = () => {
      return (
        <div className='mx-6 md:mt-12 mt-6'>
            <h3 className='mb-6 font-semibold'>Lokasi Pelanayan Kami</h3>
            <div className='md:grid grid-cols-6 justify-between gap-12'>
                <div className='col-span-3'>
                  <Map lat={-6.261894} lng={106.977853} className='h-96'/>
                </div>
            </div>
        </div>
      ) 
    }
    

export default Location