import styles from './style';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Button from '../../components/Button/Button';
import UserAsyncStorage from '../../asyncStorage/UserAsyncStorage';

export default newUserView = (props) => {

   const [name, set_name] = useState('');
   const [email, set_email] = useState('');
   const [password, set_password] = useState('');
   const [password2, set_password2] = useState('');

   const reg = async () => {

    if(name === '') {
        Alert.alert( 
            '', 'Por favor digite um nome',
            [
                { text: 'Ok'}
            ],
            {cancelable: false}  
        );   
        return;       
    }    

        if(email === '') {
            Alert.alert( 
                '', 'Por favor digite um e-mail',
                [
                    { text: 'Ok'}
                ],
                {cancelable: false}  
            );   
            return;       
        }

        if(password === '') {
            Alert.alert( 
                '', 'Por favor digite uma senha',
                [
                    { text: 'Ok'}
                ],
                {cancelable: false}  
            ); 
            return;         
        }        

        if(password !== password2) {
            Alert.alert( 
                '', 'As senhas precisam ser iguais',
                [
                    { text: 'Ok'}
                ],
                {cancelable: false}
            );
        }

        obj = {
            name: name,
            email: email,
            password: password
        }

        await UserAsyncStorage.setLogin(obj);

        Alert.alert( 
            '', 'Usuário cadastrado com sucesso',
            [
                { text: 'Ok', onPress: () => goToLogin()}
            ],
            {cancelable: false}
        );        
   }

   const goToLogin = () => {
    props.navigation.navigate('Auth');
   }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>CADASTRAR NOVO USUÁRIO</Text>

            <TextInput
                placeholder="Nome"
                onChangeText={(text) => set_name(text)}
                value={name}
                style={styles.name}
                placeholderTextColor="#000" 
            />

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

            <TextInput
                placeholder="Repita a Senha"
                secureTextEntry={true}
                onChangeText={(text) => set_password2(text)}
                value={password2}
                style={styles.password}
                placeholderTextColor="#000" 
            />                      

            <Button style={styles.buttonEnter} title="Cadastrar" onPress={reg} /> 

        </View>
    )

}
