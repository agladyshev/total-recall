import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default function Deck ({ navigation }) {
  return (
    <View>
      <Text>This is the Deck</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
        <Text>Add new card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CardList')}>
        <Text>List cards</Text>
      </TouchableOpacity>
    </View>
  )
}
