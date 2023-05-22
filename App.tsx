import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,} from 'react-native';
import {Image} from 'expo-image'
import React from 'react';


export default function App() {
  const handlepress = () => {
    console.log('clicou');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.div}>
      <Image style={styles.image} 
      source={require('./assets/imagem2.jpg')}/>
      </View>
      <Text style={styles.titulo}>Lavínia</Text>
      <Text style={styles.idade}> 25 anos</Text>
      <Text style={styles.bio}> Desenvolvedora Mobile em formação</Text>
      <View style={styles.divbutton}>
      <Button 
      color="#483D8B"
      title="Adicionar como Amigo" 
      onPress={handlepress}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9370DB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: 200,
    height: 400,
    borderRadius:50,
  },

  titulo:{
    fontFamily:'cambria',
    fontSize: 50,
    color: 'white',
    left: 120,
    top: 500,
    position: 'absolute',
  },

  idade:{
    fontFamily:'cambria',
    fontSize: 30,
    color: 'white',
    left: 140,
    top: 560,
    position: 'absolute',

  },
  
  bio:{
    fontFamily:'cambria',
    fontSize: 20,
    color: 'white',
    left: 25,
    top: 600,
    position: 'absolute',
  },  
  
  div:{
    position:'absolute',
    backgroundColor:'#9370DB',
    zIndex:1,
    width:300,
    height:300,
    top:70,
    left:100

  },
  
  divbutton:{
    top:300,
    left:5,
    width:200,
    height:200,
    borderRadius:15,

  },

  
 


});
