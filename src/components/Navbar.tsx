import CallIcon from '@mui/icons-material/Call'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Link from 'next/link'

interface NavbarProps {
  title?: string
}

const Navbar = (props: NavbarProps) => {
  const {title} = props

  return (
    <header>
      <div className="flexBetween md:px-10 px-5 text-[12px] item-center relative z-30 py-2 bg-black text-sm">
        <div className="flex gap-6">
          <a href="tel:+6281283993386" className="text-white">
            0812 8399 3386 <CallIcon style={{color: 'white'}} />{' '}
          </a>
          <a href="https://wa.me/6281283993386" className="text-white">
            WhatsApp <WhatsAppIcon style={{color: 'white'}} />{' '}
          </a>
        </div>
        <div className="grid place-content-end text-white">ID</div>
      </div>

      <nav className="md:flexBetween my-3 md:mx-10 mx-5 relative z-30 bg-white">
        <div className="flex">
          <h3 className="font-bold ml-1 content-center text-xl">{title}</h3>
          <div className="hidden relative">
            <input
              type="text"
              placeholder="Temukan kebutuah anda"
              className="border border-gray-300 rounded-full px-3 md:w-fit static text-sm"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button className="bg-orange-300 rounded-full p-1">
                <SearchIcon />
              </button>
            </span>
          </div>
        </div>
        <div className="text-black md:mt-0 mt-2">
          <ul className="flex md:gap-5 gap-3 items-center  cursor-pointer">
            <li>
              <HomeIcon />
            </li>
            <li className="hover:underline">
              <Link href="/">Beranda</Link>
            </li>
            <li className="hover:underline">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contact-us">Kontak Kami</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
