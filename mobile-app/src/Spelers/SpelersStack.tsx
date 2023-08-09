import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SpelersScreen from './SpelersScreen'
import { SpelersStackParamList } from './SpelersStackTypes'

const Stack = createNativeStackNavigator<SpelersStackParamList>()

const SpelersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spelers" component={SpelersScreen} />
    </Stack.Navigator>
  )
}

export default SpelersStack
