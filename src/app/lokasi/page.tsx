'use client'

import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Map } from '@/components/Map';
import Link from 'next/link';
import { locations } from '../../constant/location'

export default function LokasiPage() {

    return (
        <main>
        <section>
            <GoogleAnalytics />
            <div className='padding-container my-6'>
                
                <h1 className='text-2xl font-bold mb-6'>Layanan Lokasi Kami</h1>
                <ul className='md:grid grid-cols-3 gap-8 mb-6'>
                    {locations.map((location, index) => (
                        <li key={index}>
                            <div className='flex flex-col space-y-1 bg-[#f5f5f5] border p-3 my-3 rounded-md'>
                                <Map lat={location.lat} lng={location.lng} className='w-full h-80' />
                            </div>
                            
                            <Link href={location.href}>
                                    <div className='grid gap-3'>
                                        <h2 className='text-xl font-semibold'>{location.name}</h2>
                                                <h3 className='text-sm underline'>Klik di sini untuk informasi lebih lanjut</h3>
                                                <h3 className='underline'>Atau klik disini untuk hubungi Whatsapp Kami</h3>
                                            
                                    </div>
                                </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        </main>
    );
}
