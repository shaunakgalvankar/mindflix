import { Dimensions, StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from './Themed';
import RingsComponent from './rings';

const { width } = Dimensions.get('window');

const StatusContainer = ({ items }: { items: { title: string[], achieved: number[], goals: number[] } }) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 0.5, backgroundColor: 'black' }}>
                {items && (
                    <View style={styles.item}>
                        {items.achieved.map((cur, idx) => (
                            <View key={idx}>
                                <Text style={[styles.title]}>{items.title[idx]}</Text>
                                <Text style={[styles.data,{ color : titleColor[idx]}]}>{cur} / {items.goals[idx]} {title[idx]}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </View>
            <View style={{flex: 0.5, backgroundColor: '#121212' }}>
                <RingsComponent fillValue={items.achieved.map((cur, idx) => (cur / items.goals[idx]) * 100)} />
            </View>
        </View>
    );
};

const titleColor = ['#F28123','#f42e6e', '#b6fc32','#1fc2df' ];
const title = ['HRS/HRS','CAL/DAY','MIN', 'HRS' ];

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 20,
        margin: 10,
        width: width - 20,
        backgroundColor: '#121212', // Replace 'white' with your light theme color
        flexDirection: 'row', // This will arrange the children of the container side by side
        justifyContent: 'space-between', // This will put some space between the children
    },
    item: {
        padding: 10,
        backgroundColor: '#121212'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#121212'
    },
    data: {
        fontSize: 16,
        color: 'white',
        backgroundColor: '#121212'
    },
});



export default StatusContainer;

