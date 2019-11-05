import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class Alumno extends Component {
  static navigationOptions = {
    title: 'Alumnos',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#891f1f',
    },
   };
  render() {
    return (
        <Content>
          <List>
            
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
                <ListItem>
                  <Text>Arrieta</Text>
                </ListItem>

            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
                <ListItem>
                  <Text>Benites</Text>
                </ListItem>

            <ListItem itemDivider>
              <Text>C</Text>
            </ListItem>  
                <ListItem>
                  <Text>Cabrera</Text>
                </ListItem>
          </List>
        </Content>
     
    );
  }
}