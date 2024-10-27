'use client'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Tooltip from '@mui/material/Tooltip'
import {useEffect, useState} from 'react'

const tooltips = [
  'Klik, Untuk Hubungi Whatsapp Kami',
  'Konsultasi Harga, Bahan dan Desain'
]

const AutoTooltip = () => {
  const [currentTooltip, setCurrentTooltip] = useState(0)
  const [open, setOpen] = useState(true) // Untuk mengontrol tampilan tooltip

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTooltip((prevIndex) => (prevIndex + 1) % tooltips.length)
      setOpen(true) // Set tooltip terbuka saat berganti
    }, 12000) // Ganti tooltip setiap 3 detik

    return () => clearInterval(intervalId) // Bersihkan interval saat komponen unmount
  }, [])

  // Menutup tooltip setelah beberapa detik
  useEffect(() => {
    const timerId = setTimeout(() => {
      setOpen(false)
    }, 5500) // Tooltip ditampilkan selama 2,5 detik

    return () => clearTimeout(timerId) // Bersihkan timer saat komponen unmount
  }, [currentTooltip])

  return (
    <Tooltip
      title={tooltips[currentTooltip]}
      arrow
      open={open}
      disableHoverListener // Nonaktifkan hover listener
      sx={{
        bgcolor: 'blue', // Ganti dengan warna latar belakang yang diinginkan
        color: 'white', // Ganti dengan warna teks yang diinginkan
        fontSize: '0.9rem' // Ukuran font tooltip
      }}
      PopperProps={{
        sx: {
          '& .MuiTooltip-tooltip': {
            bgcolor: 'black', // Latar belakang tooltip
            color: 'white', // Warna teks tooltip
            borderRadius: '20px', // Radius border tooltip
            fontSize: '14px',
            padding: '6px',
            marginRight: '20px'
          }
        }
      }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '30px'
      }}
      className="z-10 mb-6 lg:mb-3"
    >
      <LocalPhoneIcon className="text-3xl" />
    </Tooltip>
  )
}

export default AutoTooltip
