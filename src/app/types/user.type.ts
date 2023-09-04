import { environment } from "src/environments/environment";

export const USER_URL = environment.apiUrl + "user"
export const LOGIN_USER_URL = USER_URL + "/login";
export const SIGNIN_USER_URL = USER_URL + "/signin";