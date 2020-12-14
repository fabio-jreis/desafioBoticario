import AsyncStorage from '@react-native-community/async-storage';

export default class AsyncStorageAbstract {
    static setItem = async (key, value) => {
        await AsyncStorage.setItem(key, value);
    }

    static getItem = async (key) => {
        return await AsyncStorage.getItem(key);
    }

    static clearAll = async () => {
        await AsyncStorage.clear();
    }
}