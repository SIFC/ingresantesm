import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Grid, Row } from 'native-base';
export default class Alumno extends Component {
  render() {
    return (
      <Container style={{height:"100%", w}}>
        <Content >
          <List >
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}