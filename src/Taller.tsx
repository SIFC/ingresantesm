

import React, { Component} from 'react';
import { Container, Content, List, ListItem, Text, Separator, Button, H2, H3, H1, Left, Right, Icon,Accordion, CardItem, Card, Body, Item, Grid, Col, Row } from 'native-base';
import Footer from './components/Footer'
import Header from './components/Header'
import Taller_detalles from './Taller_detalles';
import Home from './Home';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
import { View } from 'react-native';
import { any } from 'prop-types';
import moment from "moment";
import Inicio from './components/Inicio';


interface Props {
  navigation: any
}

export default class Taller extends Component <Props>{
 
  static navigationOptions = {
    title: 'Ingresantes 2020',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#891f1f',
      
    },
    headerLeft: null
    // header: null,
    // headerTitle: () => <Header />,
   };
   state
  
   constructor(props) {
    super(props);
    this.state = {
      roles:any,
      alumno:false,
      profe:false,
      horarios:any,
      dia:String
    };
   
  }
  
   render() {
    // const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const datosGenerales = navigation.getParam('datosGenerales');
    this.state.roles = datosGenerales.roles
    const talleres = datosGenerales.talleres
   
   console.log( datosGenerales)
   console.log(this.state.roles)
   console.log(talleres)
    return (

      <Container>      
          <Inicio></Inicio>
          <List  dataArray={talleres }
              renderRow={(item ) =>
              <Content padder  style={{ backgroundColor: "white" }}>
                <Accordion dataArray={[{ title:item.titulo, content: item }]}
                 renderHeader={this._renderHeader}
                 renderContent={this._renderContent}                
                />
             </Content>                   
            }>                     
          </List>              
        {/* <Footer></Footer> */}
     </Container>
    );
  }
   
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
  renderElement(){
    this.state.roles.forEach(element => {
            
      if(element.description == 'Alumno')
      this.state.alumno = true;
     console.log(this.state.alumno )
     if(element.description == 'Profesor')
     this.state.profe = true;
    });
    
    
 }
 renderDias(data){

  switch (data.dia) {
    case 1:
      this.state.dia = "Lunes";
      break;
    case 2:
      this.state.dia = "Martes";
      break;
    case 3:
      this.state.dia = "Miercoles";
      break;
    case 4:
      this.state.dia = "Jueves";
      break;
    case 5:
      this.state.dia = "Viernes";
      break;
    default:
      this.state.dia = "Fuera de Hora"
      break;
  }
  }

 _renderHorarios(){
  moment.locale('es');
  return(
    <Content>
      <List dataArray={this.state.horarios} renderRow={(data) =>                                 
        <ListItem> 
        {this.renderDias(data)}
          
            {/* <Grid>
              <Row>
              <Col style={{ backgroundColor: '#635DB7', height: 100 }}><Text>día:{data.dia} </Text> </Col>
              </Row>
          
              </Grid>  */}
             
            <Card>
        <CardItem  bordered>
        <View> 
            <Text>Fecha: {moment(data.fechaTaller).format("DD-MM-YYYY")}</Text>
            <Text>día: {this.state.dia} </Text> 
            {/* <Text>taller_id:{data.taller_id}</Text> */}
            <Text>comienza a las {moment(data.horaInicio).format("hh:mm")}</Text>
            <Text>finaliza a las {moment(data.horaFin).format("hh:mm")}</Text>
           
            </View> 
            </CardItem>
            </Card>
           
        </ListItem>                            
      } />
   </Content>
   

   
  )}

  _renderContent =(item) =>{
    console.log("talleres")
      console.log(item.content)
    //  console.log("horarios ")
      console.log(item.content.horarios)
    // console.log("id ")
    // console.log(item.content.id)
    this.state.horarios = item.content.horarios
    console.log(this.state.horarios )
    
    return (
     
      <Content padder>
      <Card>
        <CardItem  bordered>
            <Body>
              <View>
          <Text>{" "}Aula: {item.content.aula}  en {item.content.ubicacion} </Text>
          <Text> Lugar: </Text>
          </View> 
          </Body>
        </CardItem>
        <CardItem >
            <Body>
            <View>
              {/* <Text>
               Contenido:
              </Text> */}
              
              <Text> <Icon name="calendar" ></Icon> Horarios: </Text>
             {this._renderHorarios()}
             
              </View>
            </Body>
        </CardItem>
        
        <CardItem footer bordered >              
         {this.renderElement()}
          { this.state.alumno?
           <Button vertical rounded light onPress={() =>this.props.navigation.navigate('Lector_Qr', {user_id:item.content.id})}>             
           <Text>Marcar Presente</Text>
         </Button>
           
            :null
          }
          { this.state.profe?
             <Button vertical rounded light onPress={() => this.props.navigation.navigate('Alumno')} >
             <Text>Alumnos</Text>
           </Button>
            :null
          }   
        </CardItem>
      </Card>
    </Content>
    );
  }

  
}
