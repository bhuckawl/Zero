import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/EntregasContext';
import { TextInput } from 'react-native-paper';

export default ({route, navigation}) =>{
    const [user, setUser] = useState(route.params ? route.params : {}); //Se o valor de "route.params" existir ele preenche o useState, se não existir ele deixa vazio
    
    const { state, dispatch } = useContext(UsersContext);
    
    return(
        <View style={style.form}>

            <TextInput
                label='Local de Entrega'
                style={style.input}
                onChangeText={name => setUser({...user, name})} // Ele pega todos os valores de usuário e sobrescreve o nome
                value={user.name}
                mode='outlined'
            />

            <TextInput
                label='Data da Entrega'
                style={style.input}
                onChangeText={quantidade => setUser({...user, quantidade})} // Ele pega todos os valores de usuário e sobrescreve o nome
                value={user.quantidade}
                mode='outlined'
            />

  

            <Button 
                title="Salvar"
                onPress={()=> {
                    navigation.goBack();
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                }}
                color='#eb3b5b'
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding:  12
    }, 
    input:{
        marginBottom: 20
    },
})
