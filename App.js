import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import {LinearGradient} from 'expo';

export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>  
      <Text style={styles.firstHeader} >
          Ddrive
        </Text>
        <TouchableOpacity style={styles.logo}>
        <Text style={styles.logoHeader}>
          Driver
        </Text>
          <Image
            source={require('./components/images/22139451-track-driver2.jpg')} style={{width: 400, height: 200}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logo}>
        <Text style={styles.logoHeader}>
          Checker
        </Text>  
          <Image
            source={require('./components/images/TFP.jpg')} style={{width: 400, height: 200}}/>
        </TouchableOpacity>
    </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  firstHeader: {
    fontSize:23,
    marginTop: 20,
    textAlign: 'center',
  },
  logoHeader:{
    fontSize: 23,
    fontFamily: 'vincHand',
  },
  logo:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,    
    width: undefined,
    height: undefined,
  }
});
