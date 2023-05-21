import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import {Image} from 'expo-image'
import { useFonts } from 'expo-font';
import * as Font from 'expo-font'


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
      <Image style={styles.image} 
      source={require('./assets/imagem2.jpg')}
      />
      </View>
      <Text style={styles.titulo}>Lavínia</Text>
      <Text style={styles.idade}> 25 anos</Text>
      <Text style={styles.bio}> Desenvolvedora Mobile em formação</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9400D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: 200,
    height: 400,
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
    backgroundColor:'#9400D3',
    zIndex:1,
    width:300,
    height:300,
    top:70,
    left:100

  },
});
