import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const AddItem = ({title, addItem, deleteList}) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    const add = () => {
        addItem(text);
        setText('');
    };

    return (
        <View>
            <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange} value={text} />
            <View style={styles.buttons}>
                <TouchableOpacity onPress={()=>add()} style={styles.btn}>
                    <Text style={styles.btnText}>Add Item</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>deleteList()} style={styles.btn}>
                    <Text style={styles.btnText}>Clear</Text>
                </TouchableOpacity>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: '10%',
        marginVertical: 20,
        paddingBottom: 5
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    btn: {
        backgroundColor: '#004385',
        padding: 9,
        width: 120,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black'
    },
    btnText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }
});

export default AddItem;