import AsyncStorageAbstract from "./AsyncStorageAbstract";

const USER_LOGIN = "userLogin";

export default class UserAsyncStorage extends AsyncStorageAbstract {

    static getLogin = async () => {
        return await this.getItem(USER_LOGIN);
    }

    static setLogin = async (dataLogin) => {
        await this.setItem(USER_LOGIN, JSON.stringify(dataLogin));
    }


}