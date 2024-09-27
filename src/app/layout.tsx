import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { InstallProviders } from '@providers/install-providers'
import { CloseButtonSideBar, SideBar } from './_shared/components'

import './globals.css'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Espaço Dança Rafaela Nogueira',
  description: 'Developed by Mateus Nogueira'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InstallProviders>
          <SideBar />
          <CloseButtonSideBar />
          <Box component="main" sx={{ marginLeft: '250px' }}>
            {children}
          </Box>
        </InstallProviders>
      </body>
    </html>
  )
}
