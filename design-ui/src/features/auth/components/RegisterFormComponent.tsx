import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import {FC, FormEvent} from 'react'
import { Link } from 'react-router-dom';

const RegisterFormComponent: FC = () => {

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Clicked')
    }

  return (
    <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
      <form onSubmit={onSubmitHandler}>
        <Grid container direction='column' justifyContent='flex-start'>
            <Typography variant='h4' component='h1'>
                Criar sua conta
            </Typography>
            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='name'>
            Seu Nome:
            </InputLabel>
            <TextField type='text' name='text' id='name' variant='outlined' size='small' />

            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='email'>
            Seu Email:
            </InputLabel>
            <TextField type='email' name='email' id='email' variant='outlined' size='small' />

            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='password'>
            Sua Senha:
            </InputLabel>
            <TextField type='password' name='password' id='password' variant='outlined' size='small' placeholder='Minimo 6 caractes' />

            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='confirmPassword'>
            Confirme a Senha:
            </InputLabel>
            <TextField type='password' name='confirmPassword' id='confirmPassword' variant='outlined' size='small' placeholder='Confirmar senha' />
            <Button 
            variant='contained'
            style={{
                marginTop: '16px',
                height: '31px',
                backgroundColor: '#f89f2a',
                color: 'black',
                padding: '20px',
                borderColor: '#a88734',
                textTransform: 'none',
            }}
            type='submit'> Cadastrar</Button>
        </Grid>
      </form>
      <div>
        <small>
            <span>Criando sua conta, você concorda com os termos e politica de privacidade da shopXpress</span>
        </small>
      </div>

      <div style={{marginTop:'30xp'}}>
        <small>
            <a href='#' style={{ textDecoration: 'none'}}>
                {''}
                 Condições de uso
            </a>
            <a href='#' style={{ textDecoration: 'none'}}>
                {''}
                termos de privacidade
            </a>
        </small>
      </div>

      <Divider sx={{marginTop: '16px', marginBox: '16px'}} />
      <div>
        <small>
            Você já possui uma conta?{' '}
            <Link to='/signin' style={{textDecoration: 'none', color: '#0000ee'}} >Acessar</Link>
        </small>
      </div>

      
      <div>
        <small>
            Quer vender seu produto?
            <a href='#' style={{ textDecoration: 'none'}}>
                {' '}
                 Criar uma conta business 
            </a>
        </small>
      </div>
    </Box>
  )
}

export default RegisterFormComponent
