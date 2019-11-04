import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, H3 } from 'native-base';

export default class HeaderIconExample extends Component {
  render() {
    
    return  (
        
    

        <Header>
          <H3></H3>
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
     
    );
  }
}