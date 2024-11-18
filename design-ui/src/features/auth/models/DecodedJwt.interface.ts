import { DisplayUser } from "./DispatchUser.interface";

export default interface DecodedJwt {
    user: DisplayUser;
    exp: number;
    iat: number;
}