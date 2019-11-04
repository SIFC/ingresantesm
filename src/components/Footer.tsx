import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
interface Props {
  navigation: any
}
export default class FooterT extends Component <Props>{
  render() {
    return (
    
      
      
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Talleres')}>
              <Icon name="apps" />
              <Text>Talleres</Text>
            </Button>
            <Button vertical onPress={() => alert("Camara Qr")}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical onPress={() => alert("Ubicacion de la Facu")}>
              <Icon active name="navigate" />
              <Text>Ubicación</Text>
            </Button>
            <Button vertical onPress={() => alert("Datos del Alumno")}>
              <Icon name="person" />
              <Text>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
    
    );
  }
}