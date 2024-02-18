import { StyleSheet, useColorScheme, Dimensions } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import RingsComponent from '../../components/rings';
import StatusContainer from '../../components/StatusContainer';


const items = { title: ['Screen Time','Move','Excercise','Stand'], achieved: [10, 50, 70, 100], goals: [100, 100, 100, 100] };



export default function TabOneScreen() {
  const scheme = useColorScheme();

  return (
    <View style={styles.container}>
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <StatusContainer items={items} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
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
