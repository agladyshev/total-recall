import React from 'react'
import { Text, View } from 'react-native'

class AddDeck extends React.Component {
  static navigationOptions = () => {
    return {
      title: `Add new deck`
    }
  }
  render() {
    return (
      <View>
        <Text>Name your new deck</Text>
      </View>
    )
  }
}

export default AddDeck
