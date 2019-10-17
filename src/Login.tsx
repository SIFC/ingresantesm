import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Separator , Button} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class Login extends Component {

  state;
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      // numero:false,
      hash:"",
      lu:"43882",
      dni:"36112457",
      // n_inscripcion:false,
      spinner:false,
      error:false
    };
  }

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //     ...Ionicons.font,
  //   });
  //   this.setState({ isReady: true });
  // }

  login = async () => {
    // alert('logueate pue');
    let formData = new FormData();
    formData.append('lu', this.state.lu)
    formData.append('dni', this.state.dni)

    let response = await fetch('http://192.168.0.7:8000/api/login', {
      method: 'POST',
      body:formData,
  }).then((response) => response.json())
    .then(json => json)
    .catch(error => console.log(error));
  }

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

            <Button  block style={styles.button} 
            onPress= {this.login}>
                <Text>Aceptar</Text>
            </Button>
            </Form>
        </Content>
        </View>
     
    )
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