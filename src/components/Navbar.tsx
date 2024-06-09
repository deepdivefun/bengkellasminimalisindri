import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {  Autocomplete,  AutocompleteSection,  AutocompleteItem} from "@nextui-org/autocomplete";

const Navbar = () => {
  return (
    <header>
      <div className='flexBetween padding-container text-[12px] item-center relative z-30 py-2 bg-zinc-800 text-sm'>
        <div className='flex gap-6'>
          <a href="tel:+6281283993386" className='text-white'>081283993386 <CallIcon style={{ color:'white' }} /> </a>
          <a href="https://wa.me/6281283993386" className='text-white'>WhatsApp <WhatsAppIcon style={{ color:'white' }} /> </a>
        </div>
        <div className='grid place-content-end text-white'>ID</div>
      </div>

      <nav className='md:flexBetween max-container padding-container relative my-3 z-30 bg-white'>
        <div className='flex'>
         <Image width={96} height={96} src="/logo_indri3.png" alt="logo_indri" />
         <h3 className='font-bold ml-1 content-center text-xl'>INDRI TEKNIK LAS</h3>
          <div className='hidden relative'>
            <input
              type='text'
              placeholder='Temukan kebutuah anda'
              className='border border-gray-300 rounded-full px-3 md:w-fit static text-sm'
            />
            <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
              <button className='bg-orange-300 rounded-full p-1'>
                <SearchIcon />
              </button>
            </span>
          </div>
        </div>
        <div className='text-black my-3'>
          <ul className='flex md:gap-5 gap-3 items-center  cursor-pointer'>
            <li>
              <HomeIcon />
            </li>
            <li className='hover:underline'>
              <Link href='/'>Beranda</Link>
            </li>
            <li className='hover:underline'>
              <Link href='/lokasi'>Lokasi</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
