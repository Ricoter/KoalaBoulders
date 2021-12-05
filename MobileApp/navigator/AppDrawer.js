import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import Screens
import HomeScreen from '../screens/HomeScreen';
import ClimbBoulderScreen from '../screens/ClimbBoulderScreen'
import CreateBoulderScreen from '../screens/CreateBoulderScreen';
import GamesScreen from '../screens/GamesScreen'
import LEDControlScreen from '../screens/LEDControlScreen'
import SettingScreen from '../screens/SettingsScreen'
import TrainingScreen from '../screens/TrainingScreen'

const Drawer = createDrawerNavigator();

const screenOpt = {
  headerShown: false,
  drawerStyle: {
    backgroundColor: '#333',
  },
}



function App() {
  
  return (
    <Drawer.Navigator initialRouteName="💡 Create boulder" screenOptions={screenOpt}>
      <Drawer.Screen name="🏠 Home" component={HomeScreen} />
      <Drawer.Screen name="🐒 Climb boulder" component={ClimbBoulderScreen} />
      <Drawer.Screen name="💡 Create boulder" component={CreateBoulderScreen} />
      <Drawer.Screen name="💪 Training" component={TrainingScreen} />
      <Drawer.Screen name="🎲 Games" component={GamesScreen} />
      <Drawer.Screen name="🎄 LED Control" component={LEDControlScreen} />
      <Drawer.Screen name="⚙️ Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

// export default NewBoulderCard
export default App;



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',//'#ecf0f1',
  },
});
