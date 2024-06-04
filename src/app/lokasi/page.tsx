'use client'

import GoogleAnalytics from '@/components/GoogleAnalytics';
import type { Metadata } from 'next';
import { Map } from '@/components/Map';
import Link from 'next/link';

export default function LokasiPage() {
    const locations = [
        {
            name: 'Bengkel Las Jakarta',
            href: 'lokasi/bengkel-las-jakarta',
            lat: -6.224221,
            lng: 106.884750,
            additionalInfo: true,
        },
        {
            name: 'Cikarang',
            href: 'lokasi/bengkel-las-cikarang',
            lat: -6.295170,
            lng: 107.079179,
            additionalInfo: false,
        },
        {
            name: 'Cibubur',
            href: 'lokasi/bengkel-las-cibubur',
            lat: -6.364800,
            lng: 106.892929,
            additionalInfo: false,
        },
        {
            name: 'Cileungsi',
            href: 'lokasi/bengkel-las-cileungsi',
            lat: -6.425758,
            lng: 106.959122,
            additionalInfo: false,
        },
        {
            name: 'Bekasi',
            href: 'lokasi/bengkel-las-bekasi',
            lat: -6.261894,
            lng: 106.977853,
            additionalInfo: false,
        },
    ];

    return (
        <>
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
        </>
    );
}
