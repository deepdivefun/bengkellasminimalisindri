'use client'
import DraftsIcon from '@mui/icons-material/Drafts'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import SendIcon from '@mui/icons-material/Send'
import StarBorder from '@mui/icons-material/StarBorder'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Link from 'next/link'
import * as React from 'react'
import '../../globals.css'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <html lang="en">
      <head>
        {/* Tambahkan meta tag khusus atau script di sini jika diperlukan */}
      </head>
      <body>
        <div className="dashboard-container p-3">
          <div className="grid grid-cols-6">
            <div className="col-span-1">
              <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Search...
                  </ListSubheader>
                }
              >
                <Link href="/admin/dashboard">
                  <ListItemButton>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </Link>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <Link href="/admin/authorize">Authorize</Link>
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Master" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
            <div className="col-span-5">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
