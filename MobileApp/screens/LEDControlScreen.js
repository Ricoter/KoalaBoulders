import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ColorPicker } from 'react-native-color-picker'

const Picker = () => (
  <ColorPicker
    onColorSelected={color => alert(`Color selected: ${color}`)}
    style={styles.pickerContainer}
  />
)

const LEDControlScreen = () => {
  return (
    <View>
      <Text>Color Control</Text>
      <Picker/>
    </View>

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>LED Control Screen</Text>
    // </View>
  )
}

export default LEDControlScreen

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    backgroundColor: '#333',
    padding: 50,
    paddingBottom:50

  }
})