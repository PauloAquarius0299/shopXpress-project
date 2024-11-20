import { useEffect } from "react";
import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hook";
import HeaderComponent from '../features/products/components/HeaderComponent';

const HomePage = () => {

  return (
    <div>
      <HeaderComponent />
    </div>
  )
}

export default HomePage
