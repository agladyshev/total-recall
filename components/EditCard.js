import React from 'react'
import { Text, View } from 'react-native'

class EditCard extends React.Component {
  static navigationOptions = () => {
    return {
      title: `All cards`
    }
  }
  render() {
    return (
      <View>
        <Text>Edit the card</Text>
      </View>
    )
  }
}

export default EditCard
