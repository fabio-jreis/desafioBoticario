import styles from './style';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Button from '../../components/Button/Button';
import UserAsyncStorage from '../../asyncStorage/UserAsyncStorage';
import appContext from '../../context/app-context';

export default LoginView = (props) => {

    const context = useContext(appContext);

   const [email, set_email] = useState('');
   const [password, set_password] = useState('');

   const login = async () => {

    context.showLoading(true);

    var auxLogin = await UserAsyncStorage.getLogin();
    if(auxLogin === null) {
        context.showLoading(false);
        Alert.alert( 
            '', 'Faça um cadastro antes de realizar o login.',
            [
                { text: 'Ok'}
            ],
            {cancelable: false}  
        );   
        return;        
    }
    var loginObj= JSON.parse(auxLogin);
    if(email === loginObj.email && password === loginObj.password) {
        context.showLoading(false);
        props.navigation.navigate('Main');
    } else {
        context.showLoading(false);
        Alert.alert( 
            '', 'Erro ao efetuar o Login, E-mail ou Senha estão incorretos.',
            [
                { text: 'Ok'}
            ],
            {cancelable: false}  
        );   
        return;         
    }

   }

   const newUser = () => {
    //newUser
    props.navigation.navigate('Register');
   }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>ENTRAR</Text>
            <TextInput
                placeholder="E-mail"
                onChangeText={(text) => set_email(text)}
                value={email}
                style={styles.email}
                placeholderTextColor="#000" 
            />
            
            <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text) => set_password(text)}
                value={password}
                style={styles.password}
                placeholderTextColor="#000" 
            />           

            <Button style={styles.buttonEnter} title="Entrar" onPress={login} /> 

            <TouchableOpacity style={{marginTop: 30}} onPress={newUser}>
                <Text style={{color: 'white'}}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )

}
