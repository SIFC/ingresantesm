import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,  } from "native-base";

import { View, StyleSheet ,Button} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface Props {
  navigation: any
}
export default class Taller_detalles extends Component <Props>{
  static navigationOptions = {
    title: 'Talleres_detalles',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#891f1f',
    },
   };

   state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
      )}
    </View>
        // <Content padder>
          
        //   {/* <Card>
        //     <CardItem  bordered>
        //         <Body>
        //           <Text>Taller 1 </Text>
        //         </Body>
        //     </CardItem>
        //     <CardItem bordered>
        //         <Body>
        //           <Text>
        //             descripciones
        //           </Text>
        //         </Body>
        //     </CardItem>
        //     <CardItem footer bordered>
                
        //           <Button vertical rounded light onPress={() => this.props.navigation.navigate('Alumno')}>
        //             <Text>Alumnos</Text>
        //           </Button>
                  
        //           <Button vertical rounded light>
        //             <Text>Marcar Presente</Text>
        //           </Button>
                  
        //     </CardItem>
        //   </Card> */}
        // </Content>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}


