import React from 'react'

import {
  faArrowsSpin,
  faRankingStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, RouteProp } from '@react-navigation/native'

import { RootNavigationParamList } from './RootNavigationTypes'
import RotatieStack from './Rotaties/RotatieStack'
import SpelersStack from './Spelers/SpelersStack'
import TegenstandersStack from './Tegenstanders/TegenstanderStack'

const BottomTab = createBottomTabNavigator<RootNavigationParamList>()

const getTabBarIcon = (
  route: RouteProp<RootNavigationParamList, keyof RootNavigationParamList>,
  color: string,
): JSX.Element => {
  switch (route.name) {
    case 'RotatiesTab':
      return <FontAwesomeIcon icon={faArrowsSpin} color={color} />
    case 'SpelersTab':
      return <FontAwesomeIcon icon={faUsers} color={color} />
    case 'TegenstandersTab':
      return <FontAwesomeIcon icon={faRankingStar} color={color} />
  }
}

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => getTabBarIcon(route, color),
        })}>
        <BottomTab.Screen
          name="RotatiesTab"
          options={{ title: 'Rotaties' }}
          component={RotatieStack}
        />
        <BottomTab.Screen
          name="SpelersTab"
          options={{ title: 'Spelers' }}
          component={SpelersStack}
        />
        <BottomTab.Screen
          name="TegenstandersTab"
          options={{ title: 'Tegenstanders' }}
          component={TegenstandersStack}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
