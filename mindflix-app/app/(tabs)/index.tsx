import { StyleSheet, useColorScheme, Dimensions } from 'react-native';
import { Text, View } from '../../components/Themed';
import StatusContainer from '../../components/StatusContainer';
import TrendContainer from '../../components/TrendContainer';
import MetricsBox from '../../components/MetricsBox';

const items = { title: ['Screen Time','Move','Excercise','Stand'], achieved: [40, 50, 70, 60], goals: [100, 100, 100, 100] };
const miniItems = { name: "Calvin Dani", title: ['Screen Time','Move','Excercise','Stand'], achieved: [10, 50, 70, 100], goals: [100, 100, 100, 100] };



export default function TabOneScreen() {
  const scheme = useColorScheme();

  return (
    <View style={styles.container}>
      <StatusContainer items={items} />
      <MetricsBox />
      <Text style={styles.title}>Trends</Text>
      <TrendContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: -322,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    },
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: "rgba(255,255,255,0.1)",
  },
});
