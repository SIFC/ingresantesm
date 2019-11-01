import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Home from './src/Home'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import { Container } from 'native-base';
// import { Header } from 'react-navigation-stack';
import { AppContainer } from './src/Home';
import Taller from './src/Taller';
import Alumno from './src/Alumno';
export default function App() {
 
  return (
    
    <Container>
       {/* <Header></Header> */}
     {/* <AppContainer></AppContainer>  */}
     {/* <Alumno></Alumno> */}
     <Taller></Taller>  
    {/* <Login></Login>  */}
    {/* <Home></Home> */}
    {/* <Footer></Footer> */}
    </Container>
    // <View >
    //   <Text>Open up App.tsx to start working on your app!</Text>
      
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
