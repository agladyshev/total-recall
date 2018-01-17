import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Deck from './components/Deck'
import DeckList from './components/DeckList'
import { StackNavigator } from 'react-navigation'

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Total Recall',
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck view',
    },
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Stack />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
