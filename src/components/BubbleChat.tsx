import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function BubbleChat() {
  return (
    <section
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px'
      }}
      className="z-10"
    >
      <div
        style={{backgroundColor: '#25d366'}}
        className="p-2 md:my-0 my-6 text-white rounded-full bg-white border border-green-400 text-black"
      >
        <WhatsAppIcon />
        <a
          // href="https://wa.me/6282249740340"
          className="mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          hubungi Whatsapp Kami
        </a>
      </div>
    </section>
  )
}
