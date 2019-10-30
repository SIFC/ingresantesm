// import React, { Component } from 'react';
 
// import { StyleSheet, Platform, View, Text } from 'react-native';


// export default class Taller extends Component{
//       render() {
//         return (
//             <View style={styles.container}>
//                   <Text> Taller</Text>
//             </View>
//         );
//       }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// ---------------------------------------------------------------------

import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class Taller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
       
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select One"
              placeholderStyle={{ color: "#2874F0" }}
              note={false}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}