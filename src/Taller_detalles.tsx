import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";
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
  render() {
    return (
        <Content padder>
          <Card>
            <CardItem  bordered>
                <Body>
                  <Text>Taller 1 </Text>
                </Body>
            </CardItem>
            <CardItem bordered>
                <Body>
                  <Text>
                    descripciones
                  </Text>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                
                  <Button vertical rounded light onPress={() => this.props.navigation.navigate('Alumno')}>
                    <Text>Alumnos</Text>
                  </Button>
                  
                  <Button vertical rounded light>
                    <Text>Marcar Presente</Text>
                  </Button>
                  
            </CardItem>
          </Card>
        </Content>
    );
  }
}