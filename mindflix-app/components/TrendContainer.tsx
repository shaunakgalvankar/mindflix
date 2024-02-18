import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ActivityBoxProps {
  title: string;
  value: string;
  unit: string;
  color: string;
}

const ActivityBox: React.FC<ActivityBoxProps> = ({ title, value, unit, color }) => (
  <View style={[styles.activityBox, { borderColor: color }]}>
    <Text style={[styles.title, { color }]}>{title}</Text>
    <Text style={[styles.value, { color }]}>{value}</Text>
    <Text style={[styles.unit, { color }]}>{unit}</Text>
  </View>
);

const TrendContainer = () => {
  return (
    <View style={styles.container}>
    {/* <Text style={styles.title}>Trends</Text> */}

      <ActivityBox
        title="Screen Time"
        value="3"
        unit="HR/DAY"
        color="#F28123"
      />
      <ActivityBox
        title="Move"
        value="662"
        unit="CAL/DAY"
        color="#f42e6e"
      />
      <ActivityBox
        title="Exercise"
        value="34"
        unit="MIN/DAY"
        color="#b6fc32"
      />
      <ActivityBox
        title="Stand"
        value="8"
        unit="HR/DAY"
        color="#1fc2df"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  activityBox: {
    width: width / 2 - 20,
    backgroundColor: 'black',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  unit: {
    fontSize: 16,
  },
});

export default TrendContainer;
