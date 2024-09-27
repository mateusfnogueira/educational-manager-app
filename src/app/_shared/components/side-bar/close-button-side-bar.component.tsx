'use client'
import { IconButton } from '@mui/material'
import { useGlobalStore } from '../../stores'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

export const CloseButtonSideBar = () => {
  const { setOpenSideBar } = useGlobalStore()

  return (
    <IconButton onClick={() => setOpenSideBar(true)}>
      <MenuOpenIcon />
    </IconButton>
  )
}
