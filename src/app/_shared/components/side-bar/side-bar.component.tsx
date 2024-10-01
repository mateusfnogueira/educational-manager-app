'use client'

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material'
import { useGlobalStore } from '@stores/.'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { useRouter } from 'next/navigation'

const menuItems = [
  {
    label: 'Criar um curso',
    icon: <ContentPasteGoIcon />,
    path: '/create-course'
  },
  {
    label: 'Cadastrar um aluno',
    icon: <ContentPasteGoIcon />,
    path: '/create-student'
  },
  {
    label: 'Cadastrar um professor',
    icon: <ContentPasteGoIcon />,
    path: '/create-teacher',
    lastItem: true
  },
  {
    label: 'Ver cursos',
    icon: <ContentPasteIcon />,
    path: '/courses'
  },
  {
    label: 'Ver Alunos',
    icon: <ContentPasteIcon />,
    path: '/teachers'
  }
]

export const SideBar = () => {
  const router = useRouter()

  const { setOpenSideBar, openSideBar } = useGlobalStore()

  return (
    <Drawer open={openSideBar} variant="persistent" hideBackdrop>
      <Box
        sx={{ width: 250, height: '100%' }}
        // bgcolor={'#EB1CC8E8'}
        role="presentation"
      >
        <Box display={'flex'} justifyContent={'space-evenly'}>
          <h2>EDRN</h2>
          <Tooltip title="Fechar Menu">
            <IconButton onClick={() => setOpenSideBar(false)}>
              <HighlightOffIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => router.push(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ display: item.lastItem ? 'block' : 'none' }} />
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

//5px 1px 20px 1px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)
