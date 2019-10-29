import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Menu</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Ubicación</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}