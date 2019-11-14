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

import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Separator, Button, H2, H3, H1, Left, Right, Icon,Accordion, View, CardItem, Card, Body } from 'native-base';
import Footer from './components/Footer'
import Header from './components/Header'
import Taller_detalles from './Taller_detalles';
import Home from './Home';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
// import React from 'react';
interface Props {
  navigation: any
}


export default class Taller extends Component <Props>{
 
  static navigationOptions = {
    title: 'Talleres',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#891f1f',
    },
    // headerTitle: () => <Header />,
   };
  
  
   
   _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#891f1f"}}>
      <Text style={{ fontWeight: "600", color:"#fff" }}>
          {" "}{item.title}
        </Text>
        {expanded 
          ? <Icon style={{ fontSize: 18, color:"#fff" }} name="remove" />
          : <Icon style={{ fontSize: 18, color:"#fff"}} name="add" />}
      </View>
    );
  }
  _renderContent(item) {
    console.log(item.content)
    console.log(item.content.horarios)
    return (
      <Content padder>
      <Card>
        <CardItem  bordered>
            <Body>
          <Text>{" "}Aula: {item.content.aula} {" "} en {item.content.ubicacion} </Text>
          <Text> {" "} Duración: {item.content.duracion} hs</Text>
            </Body>
        </CardItem>
        <CardItem >
            <Body>
              <Text>
               Contenido:
              </Text>
              <Text>
              <Text>Horarios:</Text>
                <Button  danger onPress={() => this.props.navigation.navigate('Alumno')} >
                  <Icon name="calendar" ></Icon>
                </Button>
              </Text>
            </Body>
        </CardItem>
        <CardItem footer bordered>
            
              <Button vertical rounded light onPress={() => this.props.navigation.navigate('Alumno')}>
                <Text>Alumnos</Text>
              </Button>
              
              <Button vertical rounded light onPress={() =>alert("Abrir Camara leer Qr")}>
                <Text>Marcar Presente</Text>
              </Button>
              
        </CardItem>
      </Card>
    </Content>
    );
  }

  render() {
    // const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const datosGenerales = navigation.getParam('datosGenerales');
    return (
      
      <Container>
          {/* itemDivider */}
          {/* <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator> */}
          <List  dataArray={datosGenerales.talleres}
              renderRow={(item) =>
            
              // <ListItem  last  onPress={() => this.props.navigation.navigate('Taller_detalles')} >
              //   {/* <Button rounded light > */}
              //   <Left>
              //   <Text>  {item.titulo}</Text></Left>
              // {/* </Button> */}
              //  <Right>
              //    <Icon name="arrow-forward"></Icon>
              //  </Right>
              //  <Accordion dataArray={[{ title:item.titulo, content:item  }]}/>
              // </ListItem>

              <Content padder  style={{ backgroundColor: "white" }}>
                <Accordion dataArray={[{ title:item.titulo, content: item }]}
                 renderHeader={this._renderHeader}
                 renderContent={this._renderContent}
                />
               
            {/* <Button  light onPress={() => this.props.navigation.navigate('Taller_detalles')}>
               <Text>  {item.titulo}</Text>
            </Button> */}
         
             </Content>    

                
            }>
              

         
          </List>

        
         
        {/* <Footer></Footer> */}

     </Container>
    );
  }
}

// *******************************************************

// import React, { Component } from "react";
// import { Container, Header, Content, Accordion, View, Text, Icon, Button } from "native-base";
// const dataArray = [
//   { title: "First Element", content: "Lorem ipsum dolor sit amet" },
//   { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
//   { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
// ];
// export default class AccordionCustomHeaderContentExample extends Component {
//   _renderHeader(dataArray) {
//     return (
    
//         <Text >
//          {dataArray.title}
//         </Text>
     
//     );
//   }
//   _renderContent(dataArray) {
//     return (
//       <Text>
//         {dataArray.content}
//         <Button  >
//                <Text>  boton</Text>
//           </Button>
//       </Text>
//     );
//   }
//   render() {
//     return (
//       <Container>
       
//         <Content padder>
//           <Accordion
//             dataArray={dataArray}
//               renderHeader={this._renderHeader}
//              renderContent={this._renderContent}
//           />
//         </Content>
//       </Container>
//     );
//   }
// }
