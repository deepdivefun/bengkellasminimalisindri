import Image from 'next/image';
import { features } from '../constant/features.js'

const Features = () => {
  return (
    <section >
    <div className='features mx-6 md:mt-6 mb-6'>
      <h2 className='text-center text-xl font-bold mb-6'>Layanan Untuk Kenyamanan Anda</h2>
    <div className='text-center'>
      <div className='md:flex justify-center items-center gap-6'>
        {features.map(feature => (
        <article key={feature.id} className='flex flex-col space-y-1 bg-[#f5f5f5] border p-3 my-3 md:w-1/3 h-52 rounded-md'>
        <Image
          src={feature.img}
          alt='camp'
          width={42}
          height={42}
          className='mx-auto'
        />
        <h3 className='font-semibold'>{feature.title}</h3>
        <p className='text-md'>
          {feature.description}
        </p>
      </article>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Features;
