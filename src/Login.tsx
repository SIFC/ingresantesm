import React, { Component, Props } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Separator , Button} from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { Ionicons } from '@expo/vector-icons';
import { ActionHome } from 'material-ui/svg-icons';
import { createStackNavigator } from 'react-navigation-stack';

interface Props {
  navigation: any
}
export default class Login extends React.Component <Props> {

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
      server:"http://192.168.0.7/App-Laravel/ingresantesw/public",

      error:false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


  login = async () => {
    // alert('logueate pue');
    let formData = new FormData();
    formData.append('lu', this.state.lu)
    formData.append('dni', this.state.dni)

   let response = await fetch(this.state.server+'/api/login', {
      method: 'POST',
      body:formData,
  }).then((response) => response.json())
    .then(json  => this.props.navigation.navigate('Home') ) //=>alert(json.name))
    .catch(error => alert("Los datos ingresados no son corretos "));
  }

  render() { 
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
        <View style={styles.container}> 
        <Content>
        <Form >
        
          <Item floatingLabel last  > 
          <Label >DNI</Label>
          <Input keyboardType={'numeric'} 
           onChangeText={dni => this.setState({ dni })}
           value={this.state.dni}
          //  value={this.state.dni}
           />
          </Item>
          <Item floatingLabel last >
          <Label >LU</Label>
          <Input keyboardType={'numeric'} 
           onChangeText={lu => this.setState({ lu })}
           value={this.state.lu}
          //  value={this.state.lu}
           />
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
const RootStack = createStackNavigator(
  {
    Home: Home,
   
  
  },
  {
    initialRouteName: 'Home',
  }
);