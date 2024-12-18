import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hook';
import { AppBar, Badge, Box, Button, Toolbar } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { logout, selectedUser } from '../../auth/authSlice';

const HeaderComponent = () => {

    const { user } = useAppSelector(selectedUser);
    const {cart} = useAppSelector((state) => state.product);

    const [cartCount, setCartCount] = useState(0)

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(()=> {
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(() => totalQty);
    }, [cart]);

    const logoutHandler = () => {
    dispatch(logout());
    }

    return (
        <Box>
        <AppBar position='static' sx={{backgroundColor: '#ffa500', color: 'white', padding: '4px'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <img
            onClick={() => navigate('/')}
            style={{
              width: '120px',
              height: '120px',
              paddingTop: '10px',
              cursor: 'pointer',
            }}
            src='/freet.png'
            alt='shop xpress logo'
          />
                <div style={{display: 'flex'}}>
                    <div>
                        <div >Olá, {user?.name}</div>
                        <Button
                        onClick={logoutHandler}
                         sx={{ padding: 0, marginRight: '16px',backgroundColor: 'red', color: 'white' }}
                        > Sair </Button>
                    </div>
                    <Button onClick={() => navigate('/cart')}>
                        <Badge badgeContent={cartCount} color='primary'>
                            <ShoppingCartOutlinedIcon fontSize='large'  />
                        </Badge>
                        <span>Cart</span>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default HeaderComponent;