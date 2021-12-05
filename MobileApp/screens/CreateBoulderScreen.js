import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';

import Slider from '@react-native-community/slider';

import { colorMap } from '../utils/ColorMap';

import Board from '../components/Board';
import { gradeMap } from '../utils/GradeMap';
import { windowHeigth } from '../utils/Dimensions';

class CreateBoulderScreen extends Component {
  state = {
    nRandom: 10,
    squares: Array(144).fill(0),
    holdType: 'Normal',
    routeName: null,
    routeSetter: null,
    routeGrade: 11,
    routeComment: null,
  };

  getRandom = (n) => {
    // Returns array with n random 1's
    const squares = Array(144).fill(0);
    let nums = new Set();
    while (nums.size !== 8) {
      let i = Math.floor(Math.random() * 144);
      nums.add(i);
      squares[i] = 2;
    }
    return squares;
  };

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    const colorCode = colorMap[this.state.holdType];
    squares[i] = squares[i] === colorCode ? 0 : colorCode;
    this.setState({ squares: squares });
  };

  handleRouteName = (text) => {
    this.setState({ routeName: text });
  };

  handleSave = () => {
    null;
  };

  render() {
    return (
      <KeyboardAvoidingView enabled behavior={'position'}>
        <View style={styles.container}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              title={'random [' + this.state.nRandom + ']'}
              onPress={() =>
                this.setState({ squares: this.getRandom(this.state.nRandom) })
              }
              color="#866906"
            />
            <Button
              title="🗑️"
              onPress={() => this.setState({ squares: Array(144).fill(0) })}
            />
          </View>
          <Board
            style={{ flex: 1 }}
            squares={this.state.squares}
            handleClick={this.handleClick}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button
              title="Start"
              onPress={() => this.setState({ holdType: 'Start' })}
              color="green"
            />
            <Button
              title="Normal"
              onPress={() => this.setState({ holdType: 'Normal' })}
              color="orange"
            />
            <Button
              title="End"
              onPress={() => this.setState({ holdType: 'End' })}
              color="purple"
            />
          </View>
          <View>
            <TextInput
              placeholder="Enter Name here"
              style={styles.textInputStyle}
              underlineColorAndroid="transparent"
            />
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={22}
              onValueChange={(value) =>
                this.setState({ routeGrade: parseInt(value) })
              }
              step={1}
              value={11}
              tapToSeek={true}
            />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.gradeText}>
                Grade: {gradeMap[this.state.routeGrade]}
              </Text>
              <Button
                style={styles.saveButton}
                title="Save"
                onPress={() => this.handleSave()}
                color="#0458DA"
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default CreateBoulderScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#222',
  },
  textInputStyle: {
    padding: 10,
    color: '#bbb',
    fontSize: 30,
  },
  slider: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
  },
  saveButton: {
    color: 'blue',
    padding: 10,
    paddingRight: 20,
    fontSize: 30,
  },
  gradeText: {
    color: '#bbb',
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
