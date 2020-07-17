import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#033860'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Header;