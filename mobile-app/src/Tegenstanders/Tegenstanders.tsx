import React from 'react'

import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import theme from '../theme'
import { Team } from './Team'
import { TegenstandersStackScreenProps } from './TegenstandersStackTypes'

const ItemSeparatorComponent = () => (
  <View style={{ height: theme.margin.common }} />
)

const Tegenstanders = ({
  navigation,
}: TegenstandersStackScreenProps<'Tegenstanders'>) => {
  const renderItem = (info: ListRenderItemInfo<Team>) => {
    return (
      <Pressable
        style={[styles.listItem, styles.row]}
        onPress={() => navigation.navigate('Tegenstander', info.item)}>
        <View>
          <Text>{info.index + 1}: </Text>
        </View>
        <View>
          <Text>{info.item.naam}</Text>
        </View>
      </Pressable>
    )
  }

  const data = [
    new Team(1, 'VCO DS 1'),
    new Team(2, 'Leython DS 1'),
    new Team(3, 'SKC DS 3'),
    new Team(4, '...'),
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listItem}>
        <Text>
          Welk shirtnummer van de tegenstander de meeste punten scoort op
          service? (Ik weet niet of dat AVG proof kan omdat het om de
          tegenstander gaat). (Lijkt me interessant voor de terugwedstrijd)
        </Text>
      </View>
      <View style={{ height: 2 * theme.margin.common }} />
      <FlatList<Team>
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default Tegenstanders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: theme.margin.common,
  },
  listItem: {
    padding: theme.margin.common,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  row: { flexDirection: 'row' },
})
