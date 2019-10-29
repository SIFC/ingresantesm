import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, H3 } from 'native-base';
import { AppContainer } from '../Home';
export default class HeaderIconExample extends Component {
  render() {
    
    return  (
        
      <Container>
        
          <H3></H3>
           {/* <Content /> */}
        <Header>
          <Left>
            <Button transparent>
              {/* <Icon name='arrow-back' /> */}
            </Button>
          </Left>
          <Body>
            <Title>Ingresantes 2020</Title>
          </Body>
          {/* <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right> */}
        </Header>
      </Container>
    );
  }
}