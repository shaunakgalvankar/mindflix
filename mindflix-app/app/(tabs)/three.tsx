import { Dimensions, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import StatusContainerMini from '../../components/StatusContainerMini';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';

<<<<<<< Updated upstream
const { width } = Dimensions.get('window');

const miniItems1 = { name: "Calvin Dani", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [71, 63, 72, 21], goals: [100, 100, 100, 100] };
const miniItems2 = { name: "Shaunak Galvankar", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [74, 61, 79, 37], goals: [100, 100, 100, 100] };
const miniItems3 = { name: "Rani Rajurkar", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [22, 69, 79, 89], goals: [100, 100, 100, 100] };
const miniItems4 = { name: "Jash Shah", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [11, 61, 76, 47], goals: [100, 100, 100, 100] };
const miniItems5 = { name: "Juilee Katpatal", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [29, 65, 75, 86], goals: [100, 100, 100, 100] };
const miniItems6 = { name: "Piyush Mamidwar", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [23, 65, 75, 43], goals: [100, 100, 100, 100] };
const miniItems7 = { name: "Vedica Rao", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [64, 657, 78, 63], goals: [100, 100, 100, 100] };
const miniItems8 = { name: "Mantahan Shah", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [92, 68, 73, 76], goals: [100, 100, 100, 100] };
=======
const miniItems1 = { name: "Calvin Dani", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [71, 63, 72, 21], goals: [100, 100, 100, 100] ,percentage: [23,26,28,22]};
const miniItems2 = { name: "Shaunak Galvankar", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [74, 61, 79, 37], goals: [100, 100, 100, 100],percentage:[56,45,51,48] };
const miniItems3 = { name: "Rani Rajurkar", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [22, 69, 79, 89], goals: [100, 100, 100, 100],percentage:[78,45,56,67] };
const miniItems4 = { name: "Jash Shah", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [11, 61, 76, 47], goals: [100, 100, 100, 100] ,percentage:[33,36,38,32]};
const miniItems5 = { name: "Juilee Katpatal", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [29, 65, 75, 86], goals: [100, 100, 100, 100] ,percentage:[96,85,91,88]};
const miniItems6 = { name: "Piyush Mamidwar", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [23, 65, 75, 43], goals: [100, 100, 100, 100],percentage:[28,35,26,37] };
const miniItems7 = { name: "Vedica Rao", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [64, 657, 78, 63], goals: [100, 100, 100, 100],percentage:[66,75,61,78] };
const miniItems8 = { name: "Mantahan Shah", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [92, 68, 73, 76], goals: [100, 100, 100, 100] ,percentage:[83,86,88,82]};
>>>>>>> Stashed changes


export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summarytitle}>Friends</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusContainerMini items={miniItems1} />
        <StatusContainerMini items={miniItems2} />
        <StatusContainerMini items={miniItems3} />
        <StatusContainerMini items={miniItems4} />
        <StatusContainerMini items={miniItems5} />
        <StatusContainerMini items={miniItems6} />
        <StatusContainerMini items={miniItems7} />
        <StatusContainerMini items={miniItems8} />
        <StatusContainerMini items={miniItems5} />
        <StatusContainerMini items={miniItems6} />
        <StatusContainerMini items={miniItems7} />
        <StatusContainerMini items={miniItems8} />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom:10
    // padding: 10, // Adjust the padding as needed
  },
  summarytitle: {
    // marginTop: 20,
    marginLeft: 20,
    // alignItems: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  container: {
    width: width - 20,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black',
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
