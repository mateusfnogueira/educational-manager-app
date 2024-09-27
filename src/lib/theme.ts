import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '10px'
        }
      }
    }
  }
})
