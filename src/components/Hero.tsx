import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {
  return (
    <section className=''>
      <div className='md:grid grid-cols-7 mx-6 pb-3'>
        <div className='col-span-4'>
            <h1 className='text-4xl md:text-7xl font-bold'>Indri Teknik Las</h1>
        </div>
        <div className='col-span-3'>
            <h2 className='text-xl md:my-6'>
              Bengkel Las & Minimalis <br />
                Melayani pembuatan dan servis <br /> pagar, kanopi, pintu
                minimalis, jendela minimalis, railing dor
            </h2>
            <button className='p-3 rounded-full bg-white border border-green-400 text-black'>
              <WhatsAppIcon style={{ color: 'green' }} />
              <a href="https://wa.me/6287888798183" target="_blank" rel="noopener noreferrer">hubungi Whatsapp Kami</a>
            </button>
        </div>
      </div>
      {/* <div className='mx-6 static relative'>
        <div className='relative static'>
          <img
            src='/hero_img.jpg'
            alt='camp'
            width={1200}
            height={1200}
            className='w-full h-fit static relative'
          />
          <div className='absolute'>
              <h2 className='absolute'>
              Temukan sentuhan sempurna untuk rumah atau bisnis Anda! Mulai dari tangga elegan hingga kanopi yang fungsional, 
            serta pagar, pintu, dan jendela yang kokoh, 
            kami siap memenuhi semua kebutuhan rumah dan tempat bisnis Anda. Tidak hanya itu, 
            kami juga ahli dalam menciptakan logo minimalis yang unik, 
            serta menyediakan berbagai layanan minimalis lainnya seperti desain interior dan eksterior. 
            Percayakan pada kami untuk memberikan sentuhan modern dan elegan pada ruang Anda. 
            Segera hubungi kami untuk konsultasi gratis dan mulailah mewujudkan 
            impian desain Anda dengan harga yang sesuai dengan kebutuhan Anda
              </h2>
            </div>
        </div>
        <div className='col-span-2'>
            
          </div>
      </div> */}
      <div className="md:relative mx-6">
        <img  src='/hero_img.jpg' alt="Avatar" className="object-cover w-full h-full" />
        <div className="md:absolute w-full bottom-75 inset-y-12 md:p-3 py-3">
          <div className='md:grid grid-cols-6 md:mx-12'>
            <div className='col-span-3'>

            </div>
            <div className='col-span-3'>
              <div className='bg-white md:p-6 rounded-md'>
                <h2 className='text-[18px] text-justify text-black tracking-wide'>
                    Temukan sentuhan sempurna untuk rumah atau bisnis Anda! Mulai dari tangga elegan hingga kanopi yang fungsional, 
                  serta pagar, pintu, dan jendela yang kokoh, 
                  kami siap memenuhi semua kebutuhan rumah dan tempat bisnis Anda. Tidak hanya itu, 
                  kami juga ahli dalam menciptakan logo minimalis yang unik, 
                  serta menyediakan berbagai layanan minimalis lainnya seperti desain interior dan eksterior. 
                  Percayakan pada kami untuk memberikan sentuhan modern dan elegan pada ruang Anda. 
                  Segera hubungi kami untuk konsultasi gratis dan mulailah mewujudkan 
                  impian desain Anda dengan harga yang sesuai dengan kebutuhan Anda
                  </h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
