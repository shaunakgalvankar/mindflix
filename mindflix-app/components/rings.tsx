import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const calculateCircumference = (radius: number) => {
  return 2 * Math.PI * radius;
}

const RingsComponent = ({ fillValue }: { fillValue: number[] })=> {
  const radiusArray = [50, 60, 70, 80]; // Define your radius array
  const strokeWidth = 10; // Define your stroke width

  const progressAnimations = useRef(radiusArray.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = progressAnimations.map((anim, index) => {
      return Animated.timing(anim, {
        toValue: 100, // Assuming 100 is full progress
        duration: 2000, // Duration of the animation
        useNativeDriver: true,
      });
    });
    Animated.stagger(500, animations).start(); // Start animations with a stagger of 500ms
  }, []);
  const fillValues = fillValue; // Define your fill values for each ring

  useEffect(() => {
    const animations = progressAnimations.map((anim, index) => {
      return Animated.timing(anim, {
        toValue: fillValues[index], // Use the fill value for each ring
        duration: 2000, // Duration of the animation
        useNativeDriver: true,
      });
    });
    Animated.stagger(500, animations).start(); // Start animations with a stagger of 500ms
  }, []);

  return (
    <View style={styles.container}>
      {radiusArray.map((radius, index) => {
        const circumference = calculateCircumference(radius - strokeWidth);
        const strokeDashoffset = progressAnimations[index].interpolate({
          inputRange: [0, 100],
          outputRange: [circumference, 0], // Map progress from 0-100 to full circumference to 0
        });
        return (
          <Svg height="200" width="200" viewBox="0 0 200 200" key={index} style={styles.svgContainer}>
            <AnimatedCircle
              cx="100"
              cy="100"
              r={radius - strokeWidth}
              stroke={["#1fc2df", "#b6fc32", "#f42e6e", "#e8d7ff"][index]}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round" // Add this prop to make the rings rounded
              rotation="-90"
              origin="100, 100"
            />
          </Svg>
        );
      })}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  svgContainer: {
    position: 'absolute',
  },
});

export default RingsComponent;
