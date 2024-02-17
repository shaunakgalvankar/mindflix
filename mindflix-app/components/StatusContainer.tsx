import {StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from './Themed';
import EditScreenInfo from './EditScreenInfo';

const StatusContainer = ({items}: {items: any[]}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            {items && items.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.data}>{item.data}</Text>
                </View>
            ))}
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 16,
  },
});

export default StatusContainer;

