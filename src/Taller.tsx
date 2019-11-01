// import React, { Component } from 'react';
 
// import { StyleSheet, Platform, View, Text } from 'react-native';


// export default class Taller extends Component{
//       render() {
//         return (
//             <View style={styles.container}>
//                   <Text> Taller</Text>
//             </View>
//         );
//       }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// ---------------------------------------------------------------------

import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Separator, Button, H2, H3, H1, } from 'native-base';
import Footer from './components/Footer'
import Header from './components/Header'
export default class Taller extends Component {
  render() {
    return (
    
     
        <Content>
           <Header></Header>
          <Separator bordered>
            <Text>Carrera 1</Text>
          </Separator>
          <ListItem>
          <Button rounded light>
            <Text>Taller 1</Text>
          </Button>
          </ListItem>
          <ListItem last>
          <Button rounded light>
            <Text>Taller 2</Text>
          </Button>
          </ListItem>
          <Separator bordered>
          <Text>Carrera 2</Text>
          </Separator>
          <ListItem>
          <Button rounded light>
            <Text>Taller 1</Text>
          </Button>
          </ListItem>
          <ListItem last>
          <Button rounded light>
            <Text>Taller 2</Text>
          </Button>
          </ListItem>
          <Footer></Footer>
        </Content>
     
    );
  }
}