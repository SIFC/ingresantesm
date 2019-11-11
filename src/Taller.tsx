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
import { Container, Content, List, ListItem, Text, Separator, Button, H2, H3, H1, Left, Right, Icon,Accordion, View  } from 'native-base';
import Footer from './components/Footer'
import Header from './components/Header'
import Taller_detalles from './Taller_detalles';
import Home from './Home';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
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
  
  
   
   _renderHeader(dataArray) {
        return (
          <View
          style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}
        >
            <Text style={{ fontWeight: "600" }}>
             {dataArray.title}
            </Text>
            </View>
         
        );
      }
      _renderContent(dataArray) {
        return (
          <Text style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }} >
            {dataArray.content}
            <Taller_detalles></Taller_detalles>
          </Text>
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

              <Content padder>
                <Accordion dataArray={[{ title:item.titulo, content: item.talleres }]}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}/>
               
            {/* <Button  light onPress={() => this.props.navigation.navigate('Taller_detalles')}>
               <Text>  {item.titulo}</Text>
            </Button> */}
         
             </Content>    
          //            
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
