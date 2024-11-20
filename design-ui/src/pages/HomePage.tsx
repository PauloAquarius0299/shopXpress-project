import { useEffect } from "react";
import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hook";


const HomePage = () => {
  const dispatch = useAppDispatch();

  const { user, jwt} = useAppSelector(
    selectedUser
  );

  useEffect(()=> {
    console.log(123, user, jwt)
  }, [user]);

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <div>
      <h1>
        Home page
      </h1>
      <a onClick={logoutHandler} style={{backgroundColor: 'red', cursor: 'pointer', height: '40px', width: '60px', padding: '8px'}}>Sair</a>
      {user?.email}
    </div>
  )
}

export default HomePage
