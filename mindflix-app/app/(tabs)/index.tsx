import { StyleSheet, useColorScheme, Dimensions } from 'react-native';
import { Text, View } from '../../components/Themed';
import StatusContainer from '../../components/StatusContainer';
import TrendContainer from '../../components/TrendContainer';
import MetricsBox from '../../components/MetricsBox';
import { Image } from 'react-native';

const items = { title: ['Screen Time','Move','Excercise','Stand'], achieved: [40, 50, 70, 60], goals: [100, 100, 100, 100] };
const miniItems = { name: "Calvin Dani", title: ['Screen Time','Move','Excercise','Stand'], achieved: [10, 50, 70, 100], goals: [100, 100, 100, 100] };



export default function TabOneScreen() {
  const scheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summarytitle}>Summary</Text>
        <Image
          source={require('../../assets/images/sg.png')} // Replace with your image
          style={styles.image}
        />
      </View>      
      <StatusContainer items={items} />
      <MetricsBox />
      <Text style={styles.trendstitle}>Trends</Text>
      <TrendContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10, // Adjust the padding as needed
  },
  text: {
    color: 'white',
    fontSize: 24, // Adjust the size as needed
    fontWeight: 'bold',
  },
  image: {
    marginTop: 20,
    marginRight: -120,
    alignContent: 'center',
    width: 40, // Adjust the size as needed
    height: 40, // Adjust the size as needed
    borderRadius: 20, // Half the width/height to make it round
  },
  summarytitle: {
    marginTop: 20,
    marginLeft: -192,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    },
  trendstitle: {
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
