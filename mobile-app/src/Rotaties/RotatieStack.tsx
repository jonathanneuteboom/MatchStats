import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RotatieStackParamList } from './RotatieStackTypes'
import RotatieScreen from './RotatiesScreen'

const Stack = createNativeStackNavigator<RotatieStackParamList>()

const RotatieStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rotaties" component={RotatieScreen} />
    </Stack.Navigator>
  )
}

export default RotatieStack
