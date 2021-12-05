import React from 'react'
import { View, Text } from 'react-native'
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'

const Picker = () => (
  <ColorPicker
    onColorSelected={color => alert(`Color selected: ${color}`)}
    style={{flex: 1}}
  />
)

const LEDControlScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LED Control Screen</Text>
      < Picker />
    </View>
  )
}

export default LEDControlScreen