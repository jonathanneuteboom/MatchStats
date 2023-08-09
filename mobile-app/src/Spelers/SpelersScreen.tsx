import React from 'react'

import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import theme from '../theme'

const ItemSeparatorComponent = () => (
  <View style={{ height: theme.margin.common }} />
)

const SpelersScreen = () => {
  const renderItem = (info: ListRenderItemInfo<string>) => {
    return (
      <View style={styles.listItem}>
        <Text>{info.item}</Text>
      </View>
    )
  }

  const data = [
    'Welke speelster van Leython de meeste punten op service scoort (in die rotatie dus) afgezet tegenover hoe vaak in totaal geserveerd wordt. Wellicht met een percentage?',
    "Hoe veel punten een speelster speelt van ons team, zo'n totaal overzicht.",
  ]

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default SpelersScreen

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
})
