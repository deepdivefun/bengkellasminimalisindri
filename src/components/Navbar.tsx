import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <nav>
      <div className='flexBetween padding-container item-center relative z-30 py-2 bg-zinc-800 text-sm'>
        <Link href='/' className='text-white'>
          Telp 087888
        </Link>
        <div className='grid place-content-end text-white'>ID</div>
      </div>

      <div className='flexBetween max-container padding-container relative z-30 py-6 bg-white'>
        <div className='flex'>
          <Link href='/' className='text-black text-2xl mr-4'>
            LOGO
          </Link>
          <div className='relative'>
            <input
              type='text'
              placeholder='Temukan kebutuah anda'
              className='border border-gray-300 rounded-full px-3 py-2 w-96 static text-sm'
            />
            <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
              <button className='bg-orange-300 rounded-full p-1'>
                <SearchIcon />
              </button>
            </span>
          </div>
        </div>
        <div className='text-black'>
          <ul className='flex gap-5 items-center  cursor-pointer'>
            <li>
              <HomeIcon />
            </li>
            <li className='hover:underline'>Beranda</li>
            <li className='hover:underline'>Layanan</li>
            <li className='hover:underline'>Tentang</li>
            <li className='hover:underline'>Kontak</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
