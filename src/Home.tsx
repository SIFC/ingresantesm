
// import React from 'react';
// import { Button, View, Text } from 'react-native';

// import Footer from './components/Footer';
// import Header from './components/Header';

// interface Props {
//     navigation: any
//   }
// class Home extends React.Component <Props>{
    
//   static navigationOptions = {
//     title: 'Home '
//    };
// render() {
//  return (
//      <Headers></Headers>
//   <Footer></Footer>
// );
// }
// }
// export default Home;

import React from 'react';
import { Button, View, Text } from 'react-native';
interface Props {
      navigation: any
    }
class Home extends React.Component  <Props> {
  static navigationOptions = {
    title: 'Home'
   };
render() {
 return (
  <View style={{ 
   flex: 1,
   alignItems:'center',
   justifyContent:'center'
  }}>
<Button title="Go to Profile screen"
    onPress={() => this.props.navigation.navigate('Taller')}
   />
  </View>
);
}
}
export default Home;