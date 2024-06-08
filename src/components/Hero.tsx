import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <img src='/hero_img.jpg' alt="Avatar" className="object-cover w-full h-full" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className='p-6 rounded-md text-center shadow-lg'>
            <h1 className='md:text-4xl text-2xl font-bold text-white'>Bengkel Las Bekasi</h1>
            <h2 className='md:text-3xl text-xl font-semibold mt-3 text-white text-center tracking-wide'>
              Bengkel Las Terpercaya Dan Berpengalaman
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
