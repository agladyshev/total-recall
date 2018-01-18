import React from 'react'
import { Text, View } from 'react-native'

class Quiz extends React.Component {
  static navigationOptions = () => {
    return {
      title: `Quiz`
    }
  }
  render() {
    return (
      <View>
        <Text>This is quiz</Text>
      </View>
    )
  }
}

export default Quiz
