import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text } from 'react-native';


export default class Taller extends Component{
      render() {
        return (
            <View style={styles.container}>
                  <Text> Taller</Text>
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
