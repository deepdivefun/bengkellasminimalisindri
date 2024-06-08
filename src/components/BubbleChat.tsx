import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const BubbleChat = () => {
  return (
    <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        // Tambahkan gaya lain sesuai kebutuhan
      }}>
        {/* Konten BubbleChat */}
       
        <button style={{backgroundColor: '#25d366'}} className='p-2 md:my-0 my-6 text-white rounded-full bg-white border border-green-400 text-black'>
              <WhatsAppIcon />
              <a href="https://wa.me/6281283993386" className='mx-1' target="_blank" rel="noopener noreferrer">hubungi Whatsapp Kami</a>
            </button>
      </div>
  )
}

export default BubbleChat