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
interface Props {
  navigation: any
}

export default class Taller extends Component <Props>{
 
  static navigationOptions = {
    title: 'Talleres',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#891f1f',
    },
    // headerTitle: () => <Header />,
   };

  render() {
    // const { params } = this.props.navigation.state;
     const { navigation } = this.props;
     const datosGenerales = navigation.getParam('datosGenerales');
    return (
      <Container>
          {/* itemDivider */}
          {/* <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator> */}
          
          <ListItem last>
              <Button rounded light onPress={() => this.props.navigation.navigate('Taller_detalles')}>
                <Text>  {datosGenerales.name}</Text>
              </Button>
          </ListItem>
          
          <ListItem last>
              <Button rounded light onPress={() => alert("Talleres 2")}>
                <Text>Taller 2</Text>
              </Button>
          </ListItem>   
                         
          <ListItem last>
              <Button rounded light onPress={() => alert("Talleres 1")}>
                <Text>Taller 1</Text>
              </Button>
          </ListItem>
         
          <ListItem last>
              <Button rounded light onPress={() => alert("Talleres 2")}>
                <Text>Taller 2</Text>
              </Button>
          </ListItem>

        <Footer></Footer>

     </Container>
    );
  }
}