import { StyleSheet, Text, View, useEffect } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TablaUser from './TablaUser';
import TablaUsuario2 from './TablaUsuario2';
import  FirebaseConfig  from '../../../FirebaseConfig';
import { collection, getDocs, doc } from 'firebase/firestore';


const ScreenUser = () => {
  const Navegacion = useNavigation();
  const bd = FirebaseConfig.bd
  

  const [datos, setDatos] = React.useState([
    {
      id: 0,
      nombre: "",
      email: "",
      perfil: "",
    },
  ]);

  const obtenerdatos = async () => {
    const user = [];
    const querySnapshot = await getDocs(collection(bd, "users"));
    querySnapshot.forEach((doc) => {
      const { email, nombre, perfil, usuario } = doc.data();
      user.push({
        id: doc.id,
        email,
        nombre,
        perfil,
        usuario,
      });
    });

    setDatos(user);
  };


  React.useEffect(() => {
    obtenerdatos();
  }, []);
  
  return (
    <View>
      {/*<Button icon="eye-settings" mode="contained" onPress={() => Navegacion.navigate('Detalles')}>
      Ver detalles
      </Button>*/}
      <Button theme={{ colors: { primary: '#C469D8' } }} style={{marginTop:15, width:300}} icon="account-plus" mode="contained"
       onPress={()=> Navegacion.navigate("nuevouser",{hola:"Hola mundo", funcionobtenerdatos: obtenerdatos})}>
      Nuevo Usuario
      </Button>
      <Card mode='contained'>
      <TablaUsuario2
      datosuser ={datos}
      obtenerdatos={obtenerdatos}
      />
      </Card>
    </View>
  )
}

export default ScreenUser

const styles = StyleSheet.create({})