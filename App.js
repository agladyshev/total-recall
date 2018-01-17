import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
      <Text>Press here for the Deck</Text>
    </TouchableOpacity>
  </View>
)

const Deck = () => (
  <View>
    <Text>This is the Deck</Text>
  </View>
)

const Stack = StackNavigator({
  Home: {
    screen: Home
  },
  Deck: {
    screen: Deck
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
