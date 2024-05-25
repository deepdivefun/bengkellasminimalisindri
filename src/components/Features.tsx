import Image from 'next/image';
import { features } from '../constant/features.js'

const Features = () => {
  return (
    <section className=''>
    <div className='features mx-6 mt-24 mb-6'>
      <h1 className='text-center text-xl font-bold mb-6'>Layanan Untuk Kenyamanan Anda</h1>
    <div className='text-center'>
      <div className='flex justify-center items-center gap-6'>
        {features.map(feature => (
        <div className='flex flex-col space-y-1 bg-[#f5f5f5] border p-3 w-1/3 h-52 rounded-md'>
        <Image
          src={feature.img}
          alt='camp'
          width={42}
          height={42}
          className='mx-auto'
        />
        <h2 className='font-semibold'>{feature.title}</h2>
        <p className='text-md'>
          {feature.description}
        </p>
      </div>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Features;
