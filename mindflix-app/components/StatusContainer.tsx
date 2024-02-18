import { Dimensions, StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from './Themed';
import RingsComponent from './rings';

const StatusContainer = ({ items }: { items: { title: string[], achieved: number[], goals: number[] } }) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 0.5, backgroundColor: 'black' }}>
                {items && (
                    <View style={styles.item}>
                        {items.achieved.map((cur, idx) => (
                            <View key={idx}>
                                <Text style={[styles.title, { color : titleColor[idx]}]}>{items.title[idx]}</Text>
                                <Text style={styles.data}>{cur} / {items.goals[idx]}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </View>
            <View style={{flex: 0.5, backgroundColor: 'black' }}>
                <RingsComponent fillValue={items.achieved.map((cur, idx) => (cur / items.goals[idx]) * 100)} />
            </View>
        </View>
    );
};

const titleColor = ['#e8d7ff','#f42e6e', '#b6fc32','#1fc2df' ];

const styles = StyleSheet.create({
    container: {
        margin:1,
        width: Dimensions.get('window').width, // This will make the container occupy the whole width
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

