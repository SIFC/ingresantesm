import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Separator , Button} from 'native-base';

export default class Login extends Component {
    
  render() {
    return (
     
        <View style={styles.container}> 
        <Content>
        <Form >
        
          <Item floatingLabel last  > 
          <Label >DNI</Label>
          <Input keyboardType={'numeric'} />
          </Item>
          <Item floatingLabel last >
          <Label >LU</Label>
          <Input keyboardType={'numeric'} />
          </Item>
          {/* <TextInput  
          placeholder="DNI"  
          
          underlineColorAndroid='transparent' 
          style={styles.TextInputStyle}   
          keyboardType={'numeric'}
          />   */}
            {/* <Item floatingLabel last>
              <Label >DNI</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>LU</Label>
              <Input />
            </Item> */}
              <Text>  </Text>

            <Button  block style={styles.button} >
                <Text>Aceptar</Text>
            </Button>
            </Form>
        </Content>
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',  
    marginTop: 50,
      padding: 40,
     backgroundColor: '#fff',
    //  alignItems: 'center',
   width:"100%"

  },
//   headerText: {  
//     fontSize: 20,  
//     textAlign: "center",  
//     margin: 10,  
//     fontWeight: "bold"  
// },  
TextInputStyle: {  
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#009688',  
    marginBottom: 10  
},
button: {
  marginBottom: 30,
  width: 200,
  alignItems: 'center'
},
});