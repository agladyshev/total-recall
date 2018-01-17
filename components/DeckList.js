import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default function DeckList ({ navigation }) {
  return (
    <View>
      <Text>This is the DeckList view</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
        <Text>Press here for the Deck</Text>
      </TouchableOpacity>
    </View>
  )
}
