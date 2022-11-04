import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import UsersContext from '../context/EntregasContext';
import { Fab, NativeBaseProvider  } from "native-base";

export default props =>{

    const { state, dispatch } = useContext(UsersContext);

    
    const confirmUserDelete = (user) =>
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
    ])
    
    function getUserItem({item: user}) {
        return (
            <ListItem 
                key={user.id} 
                bottomDivider 
            >
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>
                        {user.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {user.quantidade}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron 
                    onPress={() => props.navigation.navigate('EntregasForm', user)}
                    name="edit"
                    color="#eb3b5b"
                    size={25}
                />
                <ListItem.Chevron 
                    onPress={() => confirmUserDelete(user)}
                    name="delete"
                    color="red"
                    size={25}
                />
            </ListItem>
        )
    }

    return(
        <NativeBaseProvider>
            <View>
                <FlatList
                    keyExtractor={user => user.id.toString()}
                    data={state.users}
                    renderItem={getUserItem}
                />
                <Fab
                    right={"42%"}
                    icon={<Icon name="add" size={25} color="white"/>} 
                    onPress={() => props.navigation.navigate('EntregasForm')}
                    style={{backgroundColor: '#eb3b5b'}}
                />
            </View>
        </NativeBaseProvider>
    )
};
