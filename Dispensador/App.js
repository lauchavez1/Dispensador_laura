import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navegation from './src/componentes/Navegation';
import Navegation2 from './src/componentes/screen/NavegacionPrincipal';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*<LoginP></LoginP>*/}
      {/*<Logginp2></Logginp2>*/}
      {/*<MenuPrincipal/>*/}
      <Navegation2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
