'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

interface BreadcrumbItem {
  href?: string
  text?: string
}

interface BasicBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function BasicBreadcrumbs({items}: BasicBreadcrumbsProps) {
  return (
    <div className="mx-6 mb-6" role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, index) =>
          item.href ? (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={item.href}
            >
              {item.text}
            </Link>
          ) : (
            <Typography key={index} sx={{color: 'text.primary'}}>
              {item.text}
            </Typography>
          )
        )}
      </Breadcrumbs>
      <div className="text-small mt-3">
        <ol className="grid gap-3">
          <li className="text-gray-600 text-xs">
            Tanggal Publikasi : Minggu, 27 Okt 2024 16:15 WIB
          </li>
        </ol>
      </div>
    </div>
  )
}
