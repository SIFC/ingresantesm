import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, H2, H1, H3, View, Title } from "native-base";
export default class CardTransparentExample extends Component {
  render() {
    return (
    
      <Content padder  >
          <Card >
            <CardItem >
              <Body style={{   justifyContent: 'center', alignItems: 'center' }}>
              
              <View style={{ alignItems: "center"}} >
              {/* <Title>Facultad de Cs Exactas </Title>
               */}
                <H2 >
                  Curso Introductorio 
                </H2>
                <H2 >
               desde el 3 al 14 de Febrero
                </H2>
                </View>
                <Text>
              
                </Text>
              
                <H1 >
                Grupo:
                </H1>
              
                <Text>
              
              </Text>
             
                <H3>
                Carrera:
                </H3>
              </Body>
            </CardItem>
          </Card>
      
         </Content> 
    );
  }
}

