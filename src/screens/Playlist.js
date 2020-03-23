import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayList = () => {
  return (
    <View nativeID="container" style={styles.container}>
      <View nativeID="header" style={styles.header}>
        <Text style={styles.textHeader}>Nome da PlayList</Text>
        <Icon
          name="search"
          style={styles.icon}
          onPress={() => alert('pesquisar')}
        />
      </View>
      <View nativeID="download" style={styles.dowloadContainer}>
        <Text style={styles.dowloadText}>Dowload</Text>
        <Switch />
      </View>
      <View nativeID="list">{/* código da lista aqui*/}</View>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  container: {backgroundColor: '#CDCDCD'},
  header: {
    flexDirection: 'row',
    backgroundColor: '#940B6B',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontSize: 25,
  },
  icon: {fontSize: 20, color: '#fff', left: 50},
  dowloadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  dowloadText: {fontSize: 16},
});
