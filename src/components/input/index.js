import React, {useState} from 'react';

import {validateAll} from 'indicative/validator';
import {Text, StyleSheet, View, Alert, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';

import {
    Button,
    ButtonText,
} from './styles';

const SingUp = ({navigation}) => {

    return (
        <Hoshi
            label={'Nome'}
            backgroudColor={'#fff'}
            borderColor={'#4CB1F7'}
            borderHeight={1}
            inputPadding={5}
            style={{marginBottom: 20, borderBottomWidth: 0.5}}
            value={name}
            onChangeText={name => setName(name)}
        />

    )
};

const styles = StyleSheet.create({
    content: {
        // backgroundColor: '#4CB1F7'
        flex: 1,
        margin: 15
    },
    card: {
        padding: 15,
        margin: 0,
    },
    form: {
        padding: 0,
        margin: 0,
        // backgroundColor: '#4CB1F7'

    },
    item: {
        padding: 0,
        margin: 0,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 15
    },
    label: {
        // color:  'white',
        width: '100%',
        fontWeight: 'bold'
    },
    input: {
        // backgroundColor: 'white',
        width: '100%',
        height: 45,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: 'gray'
    }
});


export default SingUp;
