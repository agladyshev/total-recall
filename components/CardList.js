import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class CardList extends React.Component {
  static navigationOptions = () => {
    return {
      title: `All cards`
    }
  }
  render() {
    return (
      <View>
        <Text>Here are all the cards from the deck are listed</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('EditCard')}>
          <Text>Edit card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CardList
