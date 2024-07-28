import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importar screen Principal

const Stack = createStackNavigator();
import Logginp2 from "./Login/Logginp2";
import Navegation from "../Navegation";
import CrearCuenta from "./Login/CrearCuenta";

function MyStackLogin () {
    return (
       <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Logginp2}/>
        <Stack.Screen options={{headerShown:false}} name="crearcuenta" component={CrearCuenta}/>
        <Stack.Screen options={{headerShown:false}} name="Dash" component={Navegation}/>
       </Stack.Navigator>
    )
}

export default function Navegation2 () {
    return(
        <NavigationContainer>
         <MyStackLogin/>
        </NavigationContainer>
    )
}