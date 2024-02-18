import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface MetricsProps {
  steps: string;
  distance: string;
}

const Metrics: React.FC<MetricsProps> = ({ steps, distance }) => (
  <View style={styles.container}>
    <View style={styles.metricContainer}>
      <Text style={styles.metricTitle}>Steps</Text>
      <Text style={styles.metricValue}>{steps}</Text>
    </View>
    <View style={styles.metricContainer}>
      <Text style={styles.metricTitle}>Distance</Text>
      <Text style={styles.metricValue}>{distance}</Text>
    </View>
  </View>
);

const MetricsBox = () => {
  return (
    <Metrics steps="3,361" distance="1.60MI" />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -5, 
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    margin: 10,
    width: width - 20,
  },
  metricContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  metricTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  metricValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MetricsBox;
