import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,  } from "native-base";

import { View, StyleSheet ,Button} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface Props {
  navigation: any
}
export default class Lector_Qr extends Component <Props>{
  static navigationOptions = {
    title: 'Lector_Qr',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#891f1f',
    },
   };

   state = {
    hasCameraPermission: null,
    scanned: false,
     
    server:"http://ingresantes.sambrana.com.ar:8100",
    error:false
  };
  datos = {
    user_id:"1",
    qr:'',
    fecha:Date.now(),
}

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
        <Button title={'Volver a Scanear QR'} onPress={() => this.setState({ scanned: false })} />
      )}
    </View>
    
    );
  }

  // datosSacann = async () => {
  //   // alert('logueate pue');
  //   let formData = new FormData();
  //   formData.append('lu', this.state.lu)
  //   formData.append('dni', this.state.dni)

  //  let response = await fetch(this.state.server+'/api/presente', {
  //     method: 'POST',
  //     body:formData,
  // }
  // ).then((response) => response.json())
  //   .then(json  => {
  //     this.setState({datosGenerales:json})
  //     this.props.navigation.navigate('Taller', {datosGenerales: this.state.datosGenerales}) //{datosGenerales: this.state.datosGenerales}
  //     console.log(this.state.datosGenerales)
  //   }) //=>alert(json.name)) onPress={() => this.props.navigation.navigate('Taller_detalles')}
  //   .catch(error => alert(error)
  //   );// 
  // }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  
  
   let formData = new FormData();
   formData.append('user_id', this.datos.user_id )
   formData.append('qr', data)
   formData.append('fecha', this.datos.fecha.toString())

  fetch(this.state.server+'/api/presente', {
      method: 'POST',
      body: formData
      
  }
  ).then((response) => response.json())
    .then(json  => {
      // this.setState({datosGenerales:json})
      this.props.navigation.navigate('Taller') //{datosGenerales: this.state.datosGenerales}
       console.log(json)
    }) //=>alert(json.name)) onPress={() => this.props.navigation.navigate('Taller_detalles')}
    .catch(error => alert('no anda')
    );// 

  };
}


