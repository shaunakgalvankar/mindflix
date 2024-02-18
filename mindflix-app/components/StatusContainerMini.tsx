import { Dimensions, StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from './Themed';
import RingsComponentMini from './ringsMini';

const StatusContainerMini = ({ items }: { items: { name: string, title: string[], achieved: number[], goals: number[] } }) => {
    return (
        <View style={styles.container}>
             <View style={{flex: 0.5, backgroundColor: 'black' }}>
                <Text style={styles.title}>{items.name}</Text>
                {items && (
                    <View style={styles.item}>
                        <View >
                            <Text style={styles.data}>{(items.achieved[3] / items.goals[3]) * 100}</Text>
                        </View>
                        <View >
                            <Text style={styles.data}>{(items.achieved[3] / items.goals[3])}</Text>
                        </View>
                    </View>
                )}
            </View>
            <RingsComponentMini fillValue={items.achieved.map((cur, idx) => (cur / items.goals[idx]) * 100)} />
        </View>
    );
};

const titleColor = ['#e8d7ff', '#f42e6e', '#b6fc32', '#1fc2df'];

const styles = StyleSheet.create({
    container: {
        margin: 1,
        width: Dimensions.get('window').width, // This will make the container occupy the whole width
        backgroundColor: 'black', // Replace 'white' with your light theme color
        flexDirection: 'row', // This will arrange the children of the container side by side
        justifyContent: 'space-between', // This will put some space between the children
    },
    item: {
        margin: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'black'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black'
    },
    data: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'black'
    },
});



export default StatusContainerMini;

