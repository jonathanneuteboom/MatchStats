import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import {
  RootNavigationParamList,
  RootNavigationScreenProps,
} from '../RootNavigationTypes'
import { Team } from './Team'

type TegenstandersStackParamList = {
  Tegenstanders: undefined
  Tegenstander: Team
}

type TegenstandersStackScreenProps<
  T extends keyof TegenstandersStackParamList,
> = CompositeScreenProps<
  StackScreenProps<TegenstandersStackParamList, T>,
  RootNavigationScreenProps<keyof RootNavigationParamList>
>

export type { TegenstandersStackScreenProps, TegenstandersStackParamList }
