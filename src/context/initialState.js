import { fetchUser } from "../utils/FetchLocalStorageData"

const userinfo = fetchUser()

export const initialState = {
    user: userinfo,
};

