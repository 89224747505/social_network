import {SET_ERROR_AUTH, SET_JWT, AUTH_USER_DATA} from "../authReducer";

export type InitialStateType = {
    authMessage: string | null;
    idAuth: number | null;
    jwt: string | null;
    login: string | null;
    email: string | null;
    isAuth: boolean | null;
    errorAuth: boolean | null;
}
export type AuthUSerDataPayloadType = {
    idUser: number | null;
    login: string | null;
    email:string | null;
}

export type AuthUserDataType = {
    type:typeof AUTH_USER_DATA;
    payload: AuthUSerDataPayloadType;
}

export type SetJwtType = {
    type: typeof SET_JWT;
    payload:string;
}

export type SetErrorAuthPayloadType = {
    err: boolean;
    message: string;
}

export type SetErrorAuthType = {
    type: typeof SET_ERROR_AUTH;
    payload: SetErrorAuthPayloadType;
}
