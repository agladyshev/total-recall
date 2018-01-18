import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class Deck extends React.Component {
  static navigationOptions = {
    title: 'Deck'
  }
  render() {
    return (
      <View>
        <Text>This is the Deck</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard')}>
          <Text>Add new card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CardList')}>
          <Text>List cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Deck
