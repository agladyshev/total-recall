import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default function CardList ({ navigation }) {
  return (
    <View>
      <Text>Here are all the cards from the deck are listed</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditCard')}>
        <Text>Edit card</Text>
      </TouchableOpacity>
    </View>
  )
}
