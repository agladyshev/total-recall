import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class DeckList extends React.Component {
  static navigationOptions = {
    title: 'Total Recall'
  }
  render() {
    return (
      <View>
        <Text>This is the DeckList view</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck')}>
          <Text>Press here for the Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckList
