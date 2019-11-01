import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";
export default class Taller_detalles extends Component {
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
                
                  <Button vertical rounded light>
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