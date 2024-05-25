'use client'
import React from 'react'

const Contact = () => {

    return (
        <section className='bg-zinc-950 text-white md:p-12 p-1'>
        <div className='mx-6 my-12'>
            <div className='md:flex gap-6'>
                <span className='text-xl border rounded-full p-2'>Tentang Kami</span>
                <h1 className='text-4xl font-bold mt-3'>Indri Teknik Las</h1>
            </div>
            <h2 className='font-semibold md:my-6 my-6'>Bengkel Las Melayani Pembuatan Kanopi, Pagar, Tangga, Jendela dan Minimalis</h2>
            <h2 className='md:text-sm text-justify tracking-wide'>
            Temukan sentuhan sempurna untuk rumah atau bisnis Anda! Mulai dari tangga elegan hingga kanopi yang fungsional, 
            serta pagar, pintu, dan jendela yang kokoh, 
            kami siap memenuhi semua kebutuhan rumah dan tempat bisnis Anda. Tidak hanya itu, 
            kami juga ahli dalam menciptakan logo minimalis yang unik, <br /> <br />
            serta menyediakan berbagai layanan minimalis lainnya seperti desain interior dan eksterior. 
            Percayakan pada kami untuk memberikan sentuhan modern dan elegan pada ruang Anda. 
            Segera hubungi kami untuk konsultasi gratis dan mulailah mewujudkan 
            impian desain Anda dengan harga yang sesuai dengan kebutuhan Anda
            </h2>
            <div className='flex gap-3 text-center mt-12'>
                <div>email</div>
                <div>whatsapp</div>
                <div>Phone</div>
            </div>
        </div>
        </section>
    )
}

export default Contact