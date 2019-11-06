import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Separator , Button, CardItem} from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {} from './components/Header'
import { Ionicons } from '@expo/vector-icons';
import { ActionHome } from 'material-ui/svg-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { any } from 'prop-types';

interface Props {
  navigation: any
}
export default class Login extends React.Component <Props> {
  static navigationOptions = {
    title: 'Login',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#891f1f',
    },
    // style:  '#891f1f'
   };
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
      datosGenerales:any,
      // server:"http://192.168.0.7/App-Laravel/ingresantesw/public",
      server:"http://ingresantes.sambrana.com.ar:8100",
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
  }
  ).then((response) => response.json())
    .then(json  => {
      this.setState({datosGenerales:json})
      this.props.navigation.navigate('Taller', {datosGenerales: this.state.datosGenerales}) //{datosGenerales: this.state.datosGenerales}
      console.log(this.state.datosGenerales)
    }) //=>alert(json.name)) onPress={() => this.props.navigation.navigate('Taller_detalles')}
    .catch(error => alert(error)
    );// 
  }

  render() { 
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
     
        <View style={styles.container}>  
        
        {/* <Header style={{ backgroundColor: '#891f1f'}}></Header> */}
        <Content>
       
         
        <Image style={{ height:'300px' , width:null, flex: 1}} source={require('../assets/img/logo-facena.jpg')} />
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
              {/* <Button  block style={styles.button} 
             onPress={() => this.props.navigation.navigate('Taller')}> */}
              
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
    // marginTop: 50,
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
