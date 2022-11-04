import 'react-native-gesture-handler';
import React from "react";
import {Text, View, StyleSheet, Image, TextInput, Button} from "react-native";
import { DataTable } from 'react-native-paper';
import { estilos} from "./Estilos";
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import EntregasList from './src/views/EntregasList';
import EntregasForm from './src/views/EntregasForm';
import { UsersProvider } from './src/context/UsersContext';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';




// Conexão com o banco de dados Firebase

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyD3ZWQlTIatjP17_dOB34sTNLWkeq1ZU90",
//  authDomain: "fomezero-dde9f.firebaseapp.com",
//  databaseURL: "https://fomezero-dde9f-default-rtdb.firebaseio.com",
//  projectId: "fomezero-dde9f",
//  storageBucket: "fomezero-dde9f.appspot.com",
//  messagingSenderId: "941961131738",
//  appId: "1:941961131738:web:9927c5ca4907ae10bf57e3"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//Aqui acaba API da conexão
const Stack = createStackNavigator();

//Tela de Login
    const TelaLogin = props => {  
    const onCadastrar = () => {props.navigation.navigate('TelaCadastroUsuario');}
    const onEntrar = () => {props.navigation.navigate('TelaGeral');}

        return <View style={estilos.DivRosaGeral}>
            <View style={estilos.DivTituloLogin}>
                <Image style={estilos.TituloLogin} source={require('./Source/Titulo.png')}></Image>
            </View>
            <View style={estilos.DivCampoLogin}>
                <Text style={estilos.TextPreto}>Usuário:</Text>
                <TextInput style={estilos.inputBox}></TextInput>
                <Text style={estilos.TextPreto}>Senha:</Text>
                <TextInput style={estilos.inputBox}></TextInput>
                <View style={estilos.buttonLogin}><Button title="Entrar" color='#eb3b5b' onPress={(onEntrar)}></Button></View>
                <View style={{paddingTop:20}}></View>
                <Text style={{paddingBottom:15}}>Ainda não possui conta? Registre-se!</Text>
                <View style={estilos.buttonLogin}><Button title="Registrar" color='#eb3b5b' onPress={(onCadastrar)}></Button></View>
                
            </View>
        </View>
    
    };
//Tela de Cadastro    
    const TelaCadastroUsuario = props => {  
    const onClickAqui = () => {props.navigation.navigate('TelaLogin');}   

        return <View style={estilos.DivRosaGeral}>
            <View style={estilos.DivTituloLogin}>
                <Image style={estilos.TituloLogin} source={require('./Source/Titulo.png')}></Image>
            </View>
            <View style={estilos.DivCampoLogin}>
                <Text style={estilos.TextPreto}>Usuário:</Text>
                <TextInput style={estilos.inputBox}></TextInput>
                <Text style={estilos.TextPreto}>Senha:</Text>
                <TextInput style={estilos.inputBox}></TextInput>
                <Text style={estilos.TextPreto}>Confirmar senha:</Text>
                <TextInput style={estilos.inputBox}></TextInput>
                <View style={{paddingTop:15}}></View>
                <Text style={{paddingBottom:15}}>Já possui uma conta? <Text onPress={onClickAqui}>Click aqui!</Text></Text>
                <View style={estilos.buttonLogin}><Button title="Registrar" color='#eb3b5b'></Button></View>
                
            </View>
        </View>
        
        };
//Menu Principal
//GERAL
const TelaGeral = props => {
    const onDoacoes = () => {props.navigation.navigate('TelaDoacoes');}
    const onEntregas = () => {props.navigation.navigate('TelaEntregas');}
    const onGeral = () => {props.navigation.navigate('TelaGeral');}
    
    return (
        
        <View style={estilos.container}>

          <View style={estilos.DivCampoLogin}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={estilos.buttonGeral}><Button title="DOAÇÕES" color='#F97089' onPress={onDoacoes}></Button></View> 
        <View style={estilos.buttonGeral}><Button title="GERAL" color='#eb3b5b' onPress={onGeral}></Button></View>
       <View style={estilos.buttonGeral}><Button title="ENTREGAS" color='#F97089' onPress={onEntregas}></Button></View>
      </View> 
    </View>
    <Text style={{paddingBottom:40}}></Text>
    <Text style={{paddingBottom:40}}>    Estoque</Text>

            <DataTable>
                <DataTable.Header style={estilos.head}>
                    <DataTable.Title>Produto</DataTable.Title>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title numeric>Quantidade</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Arroz</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Feijão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Macarrão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
    <Text style={{paddingBottom:51}}> </Text>
                <Text style={{paddingBottom:51}}>    Cardápio</Text>
                 <DataTable>
                <DataTable.Header style={estilos.head}>
                    <DataTable.Title>Produto</DataTable.Title>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title numeric>Quantidade</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Arroz</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Feijão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Macarrão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    )
}

//DOAÇÕES
const TelaDoacoes = props => {
    const onDoacoes = () => {props.navigation.navigate('TelaDoacoes');}
    const onEntregas = () => {props.navigation.navigate('TelaEntregas');}
    const onGeral = () => {props.navigation.navigate('TelaGeral');}
    const onNovaDoacao = () => {props.navigation.navigate('TelaNovaDoacao');}
    return (
        
        <View style={estilos.container}>

        <View style={estilos.DivCampoLogin}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={estilos.buttonGeral}><Button title="DOAÇÕES" color='#eb3b5b' onPress={onDoacoes}></Button></View> 
      <View style={estilos.buttonGeral}><Button title="GERAL" color='#F97089' onPress={onGeral}></Button></View>
     <View style={estilos.buttonGeral}><Button title="ENTREGAS" color='#F97089' onPress={onEntregas}></Button></View>
     
    </View> 
    <Text style={{paddingBottom:40}}></Text>
    <View style={estilos.buttonGeral}><Button title="Nova Doação" color='#eb3b5b' onPress={onNovaDoacao}></Button></View>
    
  </View>
     
    <Text style={{paddingBottom:50,paddingTop:50}}>     Últimas doações</Text>

            <DataTable>
                <DataTable.Header style={estilos.head}>
                    <DataTable.Title>Produto</DataTable.Title>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title numeric>Quantidade</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Arroz</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Feijão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Macarrão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    )
}
//ENTREGAS
const TelaEntregas = props => {
    const onDoacoes = () => {props.navigation.navigate('TelaDoacoes');}
    const onEntregas = () => {props.navigation.navigate('TelaEntregas');}
    const onGeral = () => {props.navigation.navigate('TelaGeral');}
    const onNovaEntrega = () => {props.navigation.navigate('TelaNovaEntrega');}
    return (
        
        <View style={estilos.container}>
 
        <View style={estilos.DivCampoLogin}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={estilos.buttonGeral}><Button title="DOAÇÕES" color='#F97089' onPress={onDoacoes}></Button></View> 
      <View style={estilos.buttonGeral}><Button title="GERAL" color='#F97089' onPress={onGeral}></Button></View>
     <View style={estilos.buttonGeral}><Button title="ENTREGAS" color='#eb3b5b' onPress={onEntregas}></Button></View>
    </View> 
      <Text style={{paddingBottom:40}}></Text>
    <View style={estilos.buttonGeral}><Button title="Nova Entrega" color='#eb3b5b' onPress={onNovaEntrega}></Button></View>
  </View>
       <Text style={{paddingBottom:50}}></Text>
    <Text style={{paddingBottom:50}}>     Próximas Entregas</Text>

            <DataTable>
                <DataTable.Header style={estilos.head}>
                    <DataTable.Title>Local</DataTable.Title>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title numeric>Quantidade</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Silva jard</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Tiradentes</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={estilos.row}>
                    <DataTable.Cell>Rui Barbosa</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    )
}

const TelaNovaDoacao = props => {
     return (
 <UsersProvider>
            
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={() => {
                            return{
                                title: "Geral - Lista de Alimentos"
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Cadastro de Alimentos"
                        }}
                    />
                </Stack.Navigator>
            
        </UsersProvider>
        
     )
     
}
const screenOptions = {
    headerStyle: {
        backgroundColor: '#F97089'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
const TelaNovaEntrega = props => {
     return (
 <UsersProvider>             
                <Stack.Navigator
                    initialRouteName="EntregaForm"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="EntregaForm"
                        component={EntregasForm}
                        options={() => {
                            return{
                                title: "Cadastro Entregas"
                            }
                        }}
                    />
              
                </Stack.Navigator>        
        </UsersProvider>
     )
     }

    const App = () => {

        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="TelaLogin" component={TelaLogin} />
                <Stack.Screen name="TelaCadastroUsuario" component={TelaCadastroUsuario} />
                <Stack.Screen name="TelaGeral" component={TelaGeral} />
                <Stack.Screen name="TelaDoacoes" component={TelaDoacoes} />
                <Stack.Screen name="TelaEntregas" component={TelaEntregas} />
                <Stack.Screen name="TelaNovaDoacao" component={TelaNovaDoacao} />
                <Stack.Screen name="TelaNovaEntrega" component={TelaNovaEntrega} />
              </Stack.Navigator>
            </NavigationContainer>
        );
    };    


export default App;
