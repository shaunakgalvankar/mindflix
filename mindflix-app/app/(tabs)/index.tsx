import { StyleSheet, useColorScheme, Dimensions } from 'react-native';
import { View } from '../../components/Themed';
import StatusContainer from '../../components/StatusContainer';
import StatusContainerMini from '../../components/StatusContainerMini';

const items = { title: ['Screen Time','Move','Excercise','Stand'], achieved: [10, 50, 70, 60], goals: [100, 100, 100, 100] };
const miniItems = { name: "Calvin Dani", title: ['Screen Time','Move','Excercise','Stand'], achieved: [10, 50, 70, 100], goals: [100, 100, 100, 100] };



export default function TabOneScreen() {
  const scheme = useColorScheme();

  return (
    <View style={styles.container}>
      <StatusContainer items={items} />
      {/* <StatusContainerMini items={miniItems} /> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
