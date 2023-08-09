import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Tegenstander from './Tegenstander'
import Tegenstanders from './Tegenstanders'
import { TegenstandersStackParamList } from './TegenstandersStackTypes'

const Stack = createNativeStackNavigator<TegenstandersStackParamList>()

const TegenstandersStack = () => {
  return (
    <Stack.Navigator initialRouteName="Tegenstanders">
      <Stack.Screen name="Tegenstander" component={Tegenstander} />
      <Stack.Screen name="Tegenstanders" component={Tegenstanders} />
    </Stack.Navigator>
  )
}

export default TegenstandersStack
