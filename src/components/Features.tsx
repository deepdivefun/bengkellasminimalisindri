import Image from 'next/image';
import { features } from '../constant/features.js'

const Features = () => {
  return (
    <section >
    <div className='features mx-6 md:my-6'>
      <h2 className='text-xl font-bold mb-3'>Kenapa Memilih Kami</h2>
    <div className='text-center'>
      <ul className='md:flex justify-center items-center gap-6'>
        {features.map(feature => (
        <li key={feature.id} className='flex flex-col space-y-1 bg-[#f5f5f5] border p-3 my-3 md:w-1/3 h-52 rounded-md'>
        {feature.img}
        <h3 className='font-semibold'>{feature.title}</h3>
        <p className='text-md'>
          {feature.description}
        </p>
      </li>
        ))}
      </ul>
    </div>
    </div>
    </section>
  );
};

export default Features;
