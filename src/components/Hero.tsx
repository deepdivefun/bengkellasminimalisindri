import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {
  return (
    <section>
      {/* <div className='md:grid grid-cols-6 gap-6 mx-6 pb-12'>
        <div className='col-span-3'>
          <img
              src='/hero_img.jpg'
              alt='camp'
              width={1200}
              height={1200}
              className='w-full h-fit static relative'
            />
        </div>
        <div className='col-span-3'>
          <h1 className='md:text-2xl text-xl font-bold my-3 md:my-0'>Bengkel Las dan Bengkel Las Minimalis</h1>
            <h2 className='text-xl md:my-6'>
                Melayani pembuatan dan servis pagar, tangga, kanopi, pintu
                minimalis, jendela minimalis, railing dor, dan lain lain
            </h2>
        </div>
      </div> */}
      {/* <div className='static relative'>
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
      <div className="relative">
        <img src='/hero_img.jpg' alt="Avatar" className="object-cover w-full h-full" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className='p-6 rounded-md text-center shadow-lg'>
            <h1 className='text-4xl font-bold text-white'>Bengkel Las Bekasi</h1>
            <h2 className='md:text-3xl font-semibold mt-3 text-white text-center tracking-wide'>
              Bengkel Las Terpercaya Dan Berpengalaman
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
