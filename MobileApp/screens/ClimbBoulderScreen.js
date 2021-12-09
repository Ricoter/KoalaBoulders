import React from 'react'
import { View, Text, SafeAreaView, FlatList, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'

import BoardThumb from '../components/BoardThumb'
import { gradeMap } from '../utils/GradeMap';

// example data
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    squares: Array(144).fill(0),
    grade: 8,
    setter: "Ricotta",
    name: "My Little Bony",
    rating: 2.0
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    squares: Array(144).fill(2),
    grade: 20,
    setter: "Panter",
    name: "Sweet Fishhead, die",
    rating: 5.0,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    squares: Array(144).fill(1),
    grade: 12,
    setter: "Ari",
    name: "Krakaka",
    rating: 3.9,
  },
];

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={{ flex: 1, flexDirection: 'row'}}>
      <BoardThumb
        squares={item.squares}
      />
      <View style={styles.flatText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.title}>Setter: {item.setter}</Text>
        <Text style={styles.title}>Grade: {gradeMap[item.grade]}</Text>
        <Text style={styles.title}>⭐ {item.rating}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


const ClimbBoulderScreen = () => {

  const onPress = () => {
    return(null)
  }

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => onPress(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default ClimbBoulderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#333",
  },
  item: {
    backgroundColor: '#5656',
    padding: 7,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: '#888',
  },
  name: {
    fontSize: 20,
    color: 'orange'
  },
  flatText: {
    marginLeft: 10,
  }
});