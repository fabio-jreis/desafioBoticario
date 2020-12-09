import styles from './style';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../components/Button/Button';

export default LoginView = (props) => {

   const [email, set_email] = useState('');
   const [password, set_password] = useState('');

   const login = () => {
       props.navigation.navigate('Main');
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
        </View>
    )

}
