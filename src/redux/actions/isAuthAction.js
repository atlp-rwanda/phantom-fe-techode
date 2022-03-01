import { IsAuthType } from "../constants/isAuthType";

const { IS_AUTH } = IsAuthType;

export const isAuth = (payload) => {
    return {
        type: IS_AUTH,
        payload
    }
}