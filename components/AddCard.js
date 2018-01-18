import React from 'react'
import { Text, View } from 'react-native'

class AddCard extends React.Component {
  static navigationOptions = () => {
    return {
      title: `Add new card`
    }
  }
  render() {
    return (
      <View>
        <Text>Your new card</Text>
      </View>
    )
  }
}

export default AddCard
