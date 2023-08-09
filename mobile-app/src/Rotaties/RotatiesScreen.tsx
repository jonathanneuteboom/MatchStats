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

const RotatieScreen = () => {
  const renderItem = (info: ListRenderItemInfo<string>) => {
    return (
      <View style={styles.listItem}>
        <Text>{info.item}</Text>
      </View>
    )
  }

  const data = [
    'Op welke rotaties wij serverend veel scoren, dus wie dan aan serve is en in welke rotatie dat is. Bijvoorbeeld met een veldje waarin de namen van de speelsters staan zoals doorgedraaid wordt',
    'In welke rotatie we de meeste punten tegen krijgen.',
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

export default RotatieScreen

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
