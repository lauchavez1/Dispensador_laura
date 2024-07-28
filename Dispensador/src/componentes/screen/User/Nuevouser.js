import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import FirebaseConfig from "../../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Nuevouser = ({route}) => {
  const conexionbd = FirebaseConfig.bd

  const obtenerdatos = route.params.funcionobtenerdatos
    /*const hola = route.params.hola
    Alert.alert("saludos",route.params.hola)
    console.log(route.params.hola)*/
    const [nombre, setNombre] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [user, setUser] = React.useState("");
    const [perfil, setPerfil] = React.useState("");
    const [password, setPassword] = React.useState('123456');

console.log(nombre)

    const AgregarUser = async () => {
      try {
        const docRef = await addDoc(collection(conexionbd, "users"), {
          nombre: nombre,
          email: email,
          perfil: perfil,
          password:password,
        });
        console.log("Document written with ID: ", docRef.id);
        limparinput();
        obtenerdatos()
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  
      Alert.alert("Dato guardado");
      obtenerdatos()
    };

const limparinput=()=>{
  setNombre('')

}

  return (
    <View>
      <TextInput
      style={{marginTop: 10}}
      label="Nombre"
      value={nombre}
      onChangeText={setNombre}/>

      <TextInput
      style={{marginTop: 10}}
      label="Email"
      value={email}
      onChangeText={setEmail}/>

      <TextInput
      style={{marginTop: 10}}
      label="User"
      value={user}
      onChangeText={setUser}/>

      <TextInput
      style={{marginTop: 10}}
      label="Perfil"
      value={perfil}
      onChangeText={setPerfil}/>

      <View>
      <Button icon="camera" mode="contained" onPress={() => AgregarUser()} style={{marginTop: 10}} >
        Registrar</Button>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={{marginTop: 10}}>
        Calcelar</Button>
      </View>
      
    </View>
  )
}

export default Nuevouser

const styles = StyleSheet.create({})