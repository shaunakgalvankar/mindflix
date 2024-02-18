import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import StatusContainer from '../../components/StatusContainer'; // Adjust the path as needed


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <StatusContainer items={{ title: ["Shaunak"], achieved: [], goals: [] }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
