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
        navigation.navigate('Auth');
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