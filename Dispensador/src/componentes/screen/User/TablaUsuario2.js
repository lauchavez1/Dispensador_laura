import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { DataTable } from "react-native-paper";
import { IconButton, MD3Colors } from "react-native-paper";

const TablaUsuario2 = (props) => {
    const datos = props.datosuser
    const obteneruser = props.obtenerdatos
    console.log('datos desde :', datos)
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>User</DataTable.Title>
        <DataTable.Title>Email</DataTable.Title>
        <DataTable.Title>Perfil</DataTable.Title>
        <DataTable.Title numeric>Acción</DataTable.Title>
      </DataTable.Header>

      {datos.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.nombre}</DataTable.Cell>
          <DataTable.Cell>{item.email}</DataTable.Cell>
          <DataTable.Cell>{item.perfil}</DataTable.Cell>
          <DataTable.Cell>
            <View style={{  flexDirection:'row'}}>
              <IconButton
                style={{ width: 19 }}
                size={20}
                icon="square-edit-outline"
                onPress={() =>
                  navegacion.navigate("editaruser", {
                    datouser: item,
                    obtenerdatos:obtenerdatos
                  })
                }
              />
              <IconButton
                style={{ width: 19 }}
                size={20}
                icon="trash-can-outline"
                onPress={() => alertaEliminar(item.id,item.nombre)}
              />
              <IconButton
                style={{ width: 19 }}
                size={20}
                icon="eye"
                onPress={() => console.log("Pressed")}
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  )
}

export default TablaUsuario2

const styles = StyleSheet.create({})