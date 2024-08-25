import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Hero = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="/hero_img.png"
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  )
}

export default Hero
