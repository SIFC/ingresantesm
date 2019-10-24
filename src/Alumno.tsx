import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text } from 'react-native';


export default class Alumno extends Component{
      render() {
        return (
            <View style={styles.container}>
                  <Text> Alumno</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
