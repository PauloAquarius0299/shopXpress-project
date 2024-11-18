import { Box, Button, CircularProgress, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import {FC, FormEvent, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UseInput from '../../../hooks/input/UseInput';
import { validateNameLength, validatePasswordLength } from '../../../shared/utils/validator/length';
import { validateEmail } from '../../../shared/utils/validator/email';
import { NewUser } from '../models/NewUser';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hook';
import {register, reset} from '../authSlice';

const RegisterFormComponent: FC = () => {
  const {
    text: name,
    shouldDisplayError: nameHasError,
    textChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = UseInput(validateNameLength);

  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = UseInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = UseInput(validatePasswordLength);

  const {
    text: confirmPassword,
    shouldDisplayError: confirmPasswordHasError,
    textChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    clearHandler: confirmPasswordClearHandler,
  } = UseInput(validatePasswordLength);

  const clearForm = () => {
    nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    confirmPasswordClearHandler();
  };

  const dispatch = useAppDispatch();

  const {isLoading, isSuccess} = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(()=> {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
      navigate('/signin');
    }
  }, [isSuccess, dispatch]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) return;

        if (nameHasError || emailHasError || passwordHasError || confirmPasswordHasError) return;

        if(
          name.length === 0 ||
          email.length === 0 ||
          password.length === 0 || 
          confirmPassword.length === 0
        )
        return;

        const newUser: NewUser = {
          name, email, password
        }

      console.log('NEW USER:', newUser);

      dispatch(register(newUser));
    };

    if (isLoading) return <CircularProgress sx={{marginTop: '64px'}} color='primary' />

  return (
    <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
      <form onSubmit={onSubmitHandler}>
        <Grid container direction='column' justifyContent='flex-start'>
            <Typography variant='h4' component='h1'>
                Crie sua conta
            </Typography>
            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='name'>
            Seu Nome:
            </InputLabel>
            <TextField 
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            error={nameHasError}
            helperText={nameHasError ? 'Entre com seu nome' : ''}
            type='text' name='text' id='name' variant='outlined' size='small' />

            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='email'>
            Seu Email:
            </InputLabel>
            <TextField 
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            error={emailHasError}
            helperText={emailHasError ? 'Entre com seu email' : ''}
            type='email' name='email' id='email' variant='outlined' size='small' />
             <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='password'>
            Sua Senha:
            </InputLabel>
            <TextField 
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            error={passwordHasError}
            helperText={passwordHasError ? 'No minino 6 caracteres' : ''}
            type='password' name='password' id='password' variant='outlined' size='small' placeholder='Minimo 6 caractes' />
            <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000', }} htmlFor='confirmPassword'>
            Confirme a Senha:
            </InputLabel>
            <TextField 
             value={confirmPassword}
             onChange={confirmPasswordChangeHandler}
             onBlur={confirmPasswordBlurHandler}
             error={confirmPassword.length > 0 && password !== confirmPassword}
             helperText={confirmPassword.length > 0 && password !== confirmPassword ? 'Senha incompativel' : ''}
            type='password' name='confirmPassword' id='confirmPassword' variant='outlined' size='small' placeholder='Confirmar senha' />
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

export default RegisterFormComponent;