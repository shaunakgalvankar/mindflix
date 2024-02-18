import {StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from './Themed';
import EditScreenInfo from './EditScreenInfo';

const StatusContainer = ({items}: {items: {title:string[],achieved:number[],goals:number[]}}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            {items && (
                <View style={styles.item}>
                    <Text style={styles.title}>{items.title}</Text>
                    <Text style={styles.data}>{items.achieved} / {items.goals}</Text>
                </View>
            )}
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

