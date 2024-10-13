'use client'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index?: number
  value?: number
  lokasi?: string
}

function CustomTabPanel(props: TabPanelProps) {
  const {children, value, index, lokasi, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{p: 3}}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function TabContent({lokasi}: TabPanelProps) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const customHrefTab = `#Bengkel_Las_${lokasi}`
  const customLabelHrefRab = `Bengkel Las ${lokasi}`

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab
            href={customHrefTab}
            label={customLabelHrefRab}
            {...a11yProps(0)}
          />
          <Tab href="#Servis" label="Servis" {...a11yProps(1)} />
          <Tab href="#Bikin_Baru" label="Buat Baru" {...a11yProps(2)} />
          <Tab
            href="#Bahan_Dan_Material"
            label="Bahan dan Material"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Bengkel Las {lokasi} Melayani pembuatan dan servis pagar, kanopi, pintu,
        jendela minimalis, railing dor, balkon, tangga, tralis
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Servis pagar, kanopi, pintu, jendela minimalis, railing dor, balkon,
        tangga, tralis dan lain-lain
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Pembuatan pagar, kanopi, pintu, jendela minimalis, railing dor, balkon,
        tangga, tralis dan lain-lain
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Bahan Meterial Kami memahami pentingnya penggunaan material berkualitas
        dalam setiap proyek. Oleh karena itu, kami hanya menggunakan bahan-bahan
        terbaik yang meliputi: Besi: Material besi yang kami gunakan dikenal
        kuat dan tahan lama. Cocok untuk berbagai aplikasi seperti tangga,
        kanopi, dan teralis. Stainless Steel: Kami menggunakan stainless steel
        yang tahan karat dan memiliki tampilan yang elegan. Material ini ideal
        untuk pembuatan railing door, jendela, dan balkon. Galvanis: Galvanis
        merupakan material yang tahan terhadap korosi, sehingga sangat cocok
        digunakan untuk proyek luar ruangan seperti kanopi dan pagar. Baja
        Ringan: Baja ringan memiliki kekuatan tinggi dengan bobot yang lebih
        ringan dibandingkan dengan baja konvensional. Material ini sangat ideal
        untuk pembuatan struktur bangunan yang efisien dan kuat.
      </CustomTabPanel>
    </Box>
  )
}
