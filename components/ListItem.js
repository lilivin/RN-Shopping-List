import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({item, deleteItem, checkItem}) => {
    return (
        <TouchableOpacity style={styles.listItems}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <View style={styles.icons}>
                    <Icon.Button
                        style={styles.checkBtn}
                        onPress={() => checkItem(item.id)}
                        name="check"
                        backgroundColor={item.check != true ? '#33A2FF' : 'green'}
                    ></Icon.Button>
                    <Icon.Button
                        style={styles.deleteBtn}
                        onPress={() => deleteItem(item.id)}
                        name="minuscircleo"
                        backgroundColor='red'
                    ></Icon.Button>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItems: {
        padding: 5,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
    deleteBtn: {
        padding: 0,
        marginLeft: 10,
        marginVertical: 10,
    },
    checkBtn: {
        padding: 0,
        marginLeft: 10,
        marginVertical: 10,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 90
    }
});

export default ListItem;