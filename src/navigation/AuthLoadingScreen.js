import appContext from '../context/app-context';
import React, {useEffect, useContext} from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native'
//import UserAsyncStorage from '../asynStorage/UserAsyncStorage';

AuthLoadingScreen = ({ navigation }) => {

    const context = useContext(appContext);
    
    useEffect(() => {
        verifyAuth();
    }, []);
     
    
    verifyAuth = async () => {

        console.log('verifyAuth');

        navigation.navigate('Main');
        //navigation.navigate('Auth');

        //const userToken = await UserAsyncStorage.getToken();
        //var userInfo = await UserAsyncStorage.getProfile();
        //var info = JSON.parse(userInfo);

/*
        if(userToken) {

            var loja = await UserAsyncStorage.getLoja();
            if(loja === null) {
                navigation.navigate('Pre');
            } else {
                await vAccess(info);
                navigation.navigate('Main');
            }

        } else {
            navigation.navigate('Auth');
        }
*/

    };    

    return(
        <View style={styles.container}>
            <ActivityIndicator />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AuthLoadingScreen;