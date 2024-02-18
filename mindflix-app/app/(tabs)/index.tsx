import { StyleSheet, useColorScheme } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import RingsComponent from '../../components/rings';
import StatusContainer from '../../components/StatusContainer';


const items =  { title: ['Move'], achieved: [10], goals :[100]};



export default function TabOneScreen() {
  const scheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <StatusContainer items={items} />

      <RingsComponent fillValue={[50, 55, 60, 20]} />
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
});
