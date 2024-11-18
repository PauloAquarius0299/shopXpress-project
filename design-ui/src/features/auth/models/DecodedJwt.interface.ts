import { DisplayUser } from "./DispatchUser.interface";

export interface DecodedJwt {
    user: DisplayUser;
    exp: number;
    iat: number;
}