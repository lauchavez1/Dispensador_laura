import { StyleSheet, View, Alert } from "react-native";
import { Text,TextInput,Button,IconButton, PaperProvider } from "react-native-paper";
import React from "react";
import FromnuevoUser from "./FromnuevoUser";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import  FirebaseConfig  from "../../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Logginp2 = () => {

  const navigation = useNavigation()
  
  const auth = getAuth(FirebaseConfig.app)

  const [user, onChangeUser]=React.useState('')
  const [Password, onChangePass]=React.useState('')
  const [verpassword, SetVerPassword]=React.useState(true)

  const crearcuenta = ()=>{
    createUserWithEmailAndPassword(auth,user,Password)
    .then((UserCredential)=>{console.log('cuenta creada')
      Alert.alert('Cuenta creada')
      const user = UserCredential.user
      console.log(user)
    }) 
    .catch((error)=>{
      console.log(error)
    })
  }

  const loggin = ()=>{
    signInWithEmailAndPassword(auth,user,Password)
    .then((UserCredential)=>{console.log('cuenta creada')
      const user = UserCredential.user
      Alert.alert('Bienvenido:', user.email)
      navigation.replace('Dash')
      
      console.log(user)
    }) 
    .catch((error)=>{
      console.log(error)
    })
  }

  const edad ={
    edad:"27"
  }
  const Persona ={
    nombre:"maria",
    Edad:"33",
    Escolaridad:"Lic",
    Especialidad:"Medico"
  }

  const Saludaruser = (nombre)=>{
    Alert.alert("Hola saludos " + nombre)
  }
  
  const IngreserUsuario = ()=>{
    if(user == ''){
      Alert.alert('El campo de usuario no debe de estar vacio')
    }if(Password == ''){
      Alert.alert('El campo password no debe de estar vacio')
    }/*else{
      Alert.alert(user,Password)
    }*/
  }

  const funverpassword = ()=>{
    SetVerPassword(!verpassword)

    /*if(verpassword == true){
      SetVerPassword(false)
    }else{
      SetVerPassword(true)
    }*/
  }
  return (
    <PaperProvider>
      <View style={styles.contenedorpricipal}>
      <Text style={{textAlign:'center'}} variant="displayLarge">Hola</Text>
      <Text style={{textAlign:'center'}} variant="headlineLarge">Inisiar sesion</Text>

      <View style={styles.contendorinput}>
      <TextInput
      label="Correo"
      onChangeText={onChangeUser}
      keyboardType="text"
      value={{user}}
      
    />
      <TextInput
      style={{marginTop:10}}
      label="Password"
      onChangeText={onChangePass}
      secureTextEntry = {verpassword}
      keyboardType="numeric"
      value={{Password}}
      right={<TextInput.Icon icon='eye' onPress={funverpassword} />}
    />
    <Button theme={{ colors: { primary: '#C469D8' } }} style={{marginTop:20}} icon="login" mode="contained" onPress={loggin}>
        Ingresar
        </Button>
      <Button theme={{ colors: { primary: '#C469D8' } }} style={{marginTop:20}} icon="login" mode="contained" onPress={crearcuenta}>
       crearcuenta
        </Button>
        
        
        <FromnuevoUser
        user={user}
        saludar={Saludaruser}
        /*persona={persona}*/
        />
      </View>
    </View>
    </PaperProvider>
  )
}

export default Logginp2

const styles = StyleSheet.create({
  contenedorpricipal: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#CDCDCD",
  },
  contendorinput:{
    padding:15
  }
})