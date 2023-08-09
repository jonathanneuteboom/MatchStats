import React from 'react'

import { Text, View } from 'react-native'

import theme from '../theme'
import { TegenstandersStackScreenProps } from './TegenstandersStackTypes'

const Tegenstander = ({
  route,
}: TegenstandersStackScreenProps<'Tegenstander'>) => {
  return (
    <View style={{ margin: theme.margin.common }}>
      <Text>Hier wat statistiek over het team {route.params.naam}</Text>
    </View>
  )
}

export default Tegenstander
