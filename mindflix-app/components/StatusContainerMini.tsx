import { Dimensions, StyleSheet } from 'react-native';

import React from 'react';
import { Text, View } from './Themed';
import RingsComponentMini from './ringsMini';

const { width } = Dimensions.get('window');

const StatusContainerMini = ({ items }: { items: { name: string, title: string[], achieved: number[], goals: number[] } }) => {
    return (
        <View style={styles.container}>
             <View style={{flex: 0.5, backgroundColor: '#121212' }}>
                <Text style={styles.title}>{items.name}</Text>
                {items && (
                    <View style={styles.item}>
                        <View >
                            <Text style={styles.data}>{(items.achieved[3] / items.goals[3]) * 100} %</Text>
                        </View>
                        <View >
                            <Text style={[styles.data,{color:'#f42e6e'}]}>{items.achieved[3] } / {items.goals[3]}</Text>
                        </View>
                    </View>
                )}
            </View>
            <RingsComponentMini fillValue={items.achieved.map((cur, idx) => (cur / items.goals[idx]) * 100)} />
        </View>
    );
};

const titleColor = ['#F28123', '#f42e6e', '#b6fc32', '#1fc2df'];

const styles = StyleSheet.create({
    container: {
        marginTop: -2, 
        backgroundColor: '#121212',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        margin: 10,
        width: width - 30,
    },
    item: {
        margin: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#121212'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#B6FC32',
        backgroundColor: '#121212'
    },
    data: {
        fontSize: 16,
        color: '#F28123',
        backgroundColor: '#121212'
    },
});



export default StatusContainerMini;

