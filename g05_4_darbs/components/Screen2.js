import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "teal",
  },
  item: {
    padding: 25,
    fontSize: 20,
    height: 44,
    textAlign:"center",
    color: "white",
  },
});

const Second2 = () => {

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Latvijas svētku diena!' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default Second2;
