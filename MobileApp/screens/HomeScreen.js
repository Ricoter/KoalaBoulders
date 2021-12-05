// 
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function HomeScreenCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Koala Boulders
      </Text>
      <Image style={styles.logo} source={require('../assets/images/koala.png')} />
      <Text style={styles.paragraph}>
        {"\n"}Set | Share | climb
      </Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    alignContent: 'center',
    // backgroundColor: ''
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 360,
    width: 360,
  }
});
