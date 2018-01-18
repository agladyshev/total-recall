import React from 'react'
import { Platform, View } from 'react-native'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import EditCard from './components/EditCard'
import CardList from './components/CardList'
import { StackNavigator } from 'react-navigation'

// import { purple, white } from './utils/colors'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const Stack = StackNavigator({
  DeckList: {
    screen: DeckList,
    // navigationOptions: {
    //   tabBarLabel: 'Total Recall',
    //   headerTintColor: white,
    //   headerStyle: {
    //     backgroundColor: purple
    //   }
    // }
  },
  Deck: {
    screen: Deck,
    // navigationOptions: {
    //   tabBarLabel: 'Deck view'
    // },
    // headerTintColor: white,
    // headerStyle: {
    //   backgroundColor: purple
    // }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add new deck'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      tabBarLabel: 'Add new card'
    }
  },
  EditCard: {
    screen: EditCard,
    navigationOptions: {
      tabBarLabel: 'Edit card'
    }
  },
  CardList: {
    screen: CardList,
    navigationOptions: {
      tabBarLabel: 'All deck cards'
    }
  }
}, {
  initialRouteName: 'DeckList',
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <Stack />
        </View>
      </Provider>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })
