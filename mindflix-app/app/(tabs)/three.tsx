import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import StatusContainerMini from '../../components/StatusContainerMini';
import { ScrollView } from 'react-native-gesture-handler';

const miniItems1 = { name: "Sachin Tendulkar", title: ['Screen Time','Move','Excercise','Stand'], achieved: [70,65,75,80], goals: [100, 100, 100, 100] };
const miniItems2 = { name: "Virat Kohli", title: ['Screen Time','Move','Excercise','Stand'], achieved: [74,61,75,70], goals: [100, 100, 100, 100] };
const miniItems3 = { name: "Rohit Sharma", title: ['Screen Time','Move','Excercise','Stand'], achieved: [20,65,75,60], goals: [100, 100, 100, 100] };
const miniItems4 = { name: "MS Dhoni", title: ['Screen Time','Move','Excercise','Stand'], achieved: [10,65,75,50], goals: [100, 100, 100, 100] };
const miniItems5 = { name: "Jasprit Bumrah", title: ['Screen Time','Move','Excercise','Stand'], achieved: [30,65,75,80], goals: [100, 100, 100, 100] };
const miniItems6 = { name: "Hardik Pandya", title: ['Screen Time','Move','Excercise','Stand'], achieved: [80,65,75,40], goals: [100, 100, 100, 100] };
const miniItems7 = { name: "Ravindra Jadeja", title: ['Screen Time','Move','Excercise','Stand'], achieved: [60,65,75,30], goals: [100, 100, 100, 100] };
const miniItems8 = { name: "Shikhar Dhawan", title: ['Screen Time','Move','Excercise','Stand'], achieved: [90,65,75,76], goals: [100, 100, 100, 100] };


export default function TabThreeScreen() {
  return (
      <ScrollView>
        <View style={styles.container}>
          <AntDesign name="pluscircle" size={24} color="#b6fc32"  style={styles.icon}/>
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
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
      </ScrollView>
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
