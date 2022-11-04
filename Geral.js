import React from 'react';
import {Text, Image, TextInput, Button} from "react-native";
import { estilos} from "./Estilos";
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
const TableFour = () => {
    return (
        
        <View style={styles.container}>

          <View style={estilos.DivCampoLogin}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={estilos.buttonGeral}>
        <Button title="DOAÇÕES" color='#F97089'></Button></View> 
        <View style={estilos.buttonGeral}><Button title="GERAL" color='#eb3b5b' onPress={() => navigation}></Button></View>
       <View style={estilos.buttonGeral}><Button title="ENTREGAS" color='#F97089' onPress={() => navigation}></Button></View>
      </View> 
    </View>
    <Text style={{paddingBottom:40}}>    Estoque</Text>
    <Text style={{paddingBottom:40}}>    Estoque</Text>

            <DataTable>
                <DataTable.Header style={styles.head}>
                    <DataTable.Title>Produto</DataTable.Title>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title numeric>Quantidade</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Arroz</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Feijão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Macarrão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
    <Text style={{paddingBottom:51}}> </Text>
                <Text style={{paddingBottom:51}}>    Cardápio</Text>
                 <DataTable>
                <DataTable.Header style={styles.head}>
                    <DataTable.Title>Produto</DataTable.Title>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title numeric>Quantidade</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Arroz</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Feijão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>15</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                    <DataTable.Cell>Macarrão</DataTable.Cell>
                    <DataTable.Cell>10/10/2022</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 0, paddingHorizontal: 30, backgroundColor: '#f7a1b1'},
    head: { height: 44  },
    row: { height: 40 },
})
export default TableFour
