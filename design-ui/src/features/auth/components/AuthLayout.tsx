import {Grid} from '@mui/material'
import { ReactNode } from 'react'

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <Grid sx={{p: 2}} container direction='column' justifyContent='flex-start ' alignItems='center'>
      <img src={"Free.png"} alt='shopxpress logo' height='180px' />
      <main>{children}</main>
    </Grid>
  )
}

export default AuthLayout
