import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';


const TablaUser = () => {
    const data = [
        { usuario: 'Marcelino', email: 'amin@gmail.com', perfil: 'Admin', act: '' },
        { usuario: 'Amin', email: 'nanggal.com', perfil: 'Admin', act: '' },
        { usuario: 'Marcing', email: 'aminggal.com', perfil: 'Admin', act: '' },
      ];
  return (
    <View>
      <DataTable style={{ backgroundColor: '#ffff', borderRadius:25 }}>
        <DataTable.Header>
          <DataTable.Title>Usuario</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Perfil</DataTable.Title>
          <DataTable.Title>Act</DataTable.Title>
        </DataTable.Header>

        {data.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.usuario}</DataTable.Cell>
            <DataTable.Cell>{item.email}</DataTable.Cell>
            <DataTable.Cell>{item.perfil}</DataTable.Cell>
            <DataTable.Cell>
              <FontAwesome name="edit" size={24} color="black" />
              <FontAwesome name="trash" size={24} color="black" />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  )
}

export default TablaUser

const styles = StyleSheet.create({})