import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import { Container } from 'native-base';

export default function App() {
  return (
    <Container>
    <Login></Login> 
    </Container>
    // <View style={styles.container}>
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
