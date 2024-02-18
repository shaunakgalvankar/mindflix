import { Dimensions, StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from './Themed';
import EditScreenInfo from './EditScreenInfo';
import RingsComponent from './rings';

const StatusContainer = ({ items }: { items: { title: string[], achieved: number[], goals: number[] } }) => {
    return (
        <View style={styles.container}>
            <View>
            {items && (
                <View style={styles.item}>
                    
                    {items.achieved.map((cur, idx) => <View>
                        <Text style={styles.title}>{items.title}</Text>
                        <Text style={styles.data}>{cur} / {items.goals[idx]}</Text>
                        </View>)}

                </View>
            )}
            </View>
            <RingsComponent fillValue={items.achieved.map((cur, idx) => (cur / items.goals[idx]) * 100)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin:1,
        width: Dimensions.get('window').width, // This will make the container occupy the whole width
        backgroundColor: 'black', // Replace 'white' with your light theme color
        flexDirection: 'row', // This will arrange the children of the container side by side
        justifyContent: 'space-between', // This will put some space between the children
      },
    item: {
        margin:1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor : 'black'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    data: {
        fontSize: 16,
    },
});



export default StatusContainer;

