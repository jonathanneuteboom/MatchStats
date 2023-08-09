import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'

import { RotatieStackParamList } from './Rotaties/RotatieStackTypes'

type RootNavigationParamList = {
  RotatiesTab: NavigatorScreenParams<RotatieStackParamList>
  SpelersTab: undefined
  TegenstandersTab: undefined
}

type RootNavigationScreenProps<T extends keyof RootNavigationParamList> =
  BottomTabScreenProps<RootNavigationParamList, T>

export type { RootNavigationParamList, RootNavigationScreenProps }
