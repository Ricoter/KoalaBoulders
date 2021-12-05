import React from 'react'
import { View, Pressable, ImageBackground, FlatList, StyleSheet } from 'react-native'

import { colorMap } from '../utils/ColorMap'
import { windowWidth } from '../utils/Dimensions'


const Square = (props) => {
  return (
    <View style={styles.square}>
      <Pressable 
        onPress={() => props.onPress()}
        style={[{
          backgroundColor: colorMap[props.value],
          opacity: '0.7',
        },styles.square]}
      >
      </Pressable>
    </View>
  )
}


const Board = (props) => {

  const renderSquare = ({ item, index }) => {
    return (
      <View>
        <Square
          value={item}
          onPress={() => props.handleClick(index)}
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

export default Board

const styles = StyleSheet.create({
  logo: {
    height: windowWidth,
    width: windowWidth,
  },
  square: {
    height: (windowWidth-1)/12,
    width: (windowWidth-1)/12,
    borderWidth: 1,
    borderColor: '#1112',
  },
});