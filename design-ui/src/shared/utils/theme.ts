import { createTheme} from '@mui/material/styles';

export const theme = createTheme({
   palette: {
    primary: {
        main: '#4c00b0',
        contrastText: '#000000',
    },
    secondary: {
        main: '#000000',
        contrastText: '#ffffff'
    }
   }
})