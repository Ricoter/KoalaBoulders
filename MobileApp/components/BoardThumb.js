import React from 'react'
import { View, Pressable, ImageBackground, FlatList, StyleSheet } from 'react-native'

import { colorMap } from '../utils/ColorMap'
import { windowWidth } from '../utils/Dimensions'


const Square = (props) => {
  return (
    <View style={styles.square}>
      <Pressable 
        style={[{
          backgroundColor: colorMap[props.value],
          opacity: '0.7',
        },styles.square]}
      >
      </Pressable>
    </View>
  )
}

const BoardThumb = (props) => {
  const renderSquare = ({ item }) => {
    return (
      <View>
        <Square
          value={item}
        />
      </View>
    )
  }
  return(
    <View>
      <ImageBackground style={styles.logo} source={require('../assets/images/wall.jpeg')}>
      <FlatList
        data={props.squares}
        renderItem={renderSquare}
        numColumns={12}
        scrollEnabled={false}
      />
      </ImageBackground>
    </View>
  )
}

export default BoardThumb

const styles = StyleSheet.create({
  logo: {
    height: windowWidth/4,
    width: windowWidth/4,
  },
  square: {
    height: (windowWidth)/12/4,
    width: (windowWidth)/12/4,
  },
});