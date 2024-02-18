import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import StatusContainer from '../../components/StatusContainer'; // Adjust the path as needed
import { AntDesign } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <AntDesign name="pluscircle" size={24} color="#b6fc32"  style={styles.icon}/>
      <StatusContainer items={{ title: ["Shaunak"], achieved: [], goals: [] }} />
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
