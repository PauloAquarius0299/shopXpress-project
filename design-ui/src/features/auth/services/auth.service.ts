import { DisplayUser } from "../models/DispatchUser.interface";
import { NewUser } from "../models/NewUser";
import axios from 'axios';

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/register`, newUser);

    return response.data;
}

const authService = {
    register, 
    //login,
    //logout,
    //verifyJwt
}

export default authService;