import { Dimensions, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import StatusContainerMini from '../../components/StatusContainerMini';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';

const miniItems1 = { name: "Sachin Tendulkar", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [70, 65, 75, 80], goals: [100, 100, 100, 100] };
const miniItems2 = { name: "Virat Kohli", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [74, 61, 75, 70], goals: [100, 100, 100, 100] };
const miniItems3 = { name: "Rohit Sharma", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [20, 65, 75, 60], goals: [100, 100, 100, 100] };
const miniItems4 = { name: "MS Dhoni", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [10, 65, 75, 50], goals: [100, 100, 100, 100] };
const miniItems5 = { name: "Jasprit Bumrah", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [30, 65, 75, 80], goals: [100, 100, 100, 100] };
const miniItems6 = { name: "Hardik Pandya", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [80, 65, 75, 40], goals: [100, 100, 100, 100] };
const miniItems7 = { name: "Ravindra Jadeja", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [60, 65, 75, 30], goals: [100, 100, 100, 100] };
const miniItems8 = { name: "Shikhar Dhawan", title: ['Screen Time', 'Move', 'Excercise', 'Stand'], achieved: [90, 65, 75, 76], goals: [100, 100, 100, 100] };


export default function TabThreeScreen() {
  return (
    <View style={styles.container2}>

      <View style={styles.summary}>
        <Text style={styles.summarytitle}>Sharing</Text>
        {/* <AntDesign name="pluscircle" size={24} color="#b6fc32" style={styles.icon} /> */}

      </View>
      <View style={{ paddingTop: 10, paddingLeft:1, backgroundColor: "black" }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // alignItems:'flex-end',
    backgroundColor: '#121212',
    padding: 40, // Adjust the padding as needed
    // marginTop: 20,
    
  },
  summarytitle: {
    // marginTop: 40,
    // marginLeft: -192,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container2: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'flex-start',
    // justifyContent: 'center',
    backgroundColor: '#121212',
    margin: 5
  },
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#121212',
    borderRadius: 10
    
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
