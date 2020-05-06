import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Alert, TouchableOpacity} from "react-native";


import {
    Container, Content, Right, Body, Footer
} from "native-base";

import colors from '../../components/styles/colors'

// import Icon from 'react-native-vector-icons/FontAwesome5';
import api from "../../services/api";

import Load from '../../components/loader';
import {MaskService} from 'react-native-masked-text';
import Modal from "../../components/modal";
import WorningModal from "../../components/modal/worning";


import {Card, ListItem, Button, Icon, Badge, Text} from 'react-native-elements'


const EnterValue = ({navigation}) => {

    const number = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 0},
    ];

    return (
        <Container style={styles.content}>
           <View style={styles.content_header}>
                <Text>Adcionar dinheiro</Text>
           </View>
            <View style={styles.content_value}>
                <Text h3>R$ 0,00</Text>
           </View>
            <View style={styles.content_btn}>
                <View style={{alignItems: 'center', marginBottom: 30}}>
                    <Button
                        buttonStyle={{width: 300, justifyContent: 'center', backgroundColor: '#4CB1F7'}}
                        onPress={() => submitPaymentOptions()}
                        title="Prosseguir"
                    />
                </View>

                {number.map((n) => (
                    <TouchableOpacity onPress={() => console.log(n.number)}>
                        <Badge
                            key={n.number}
                            value={n.number}
                            containerStyle={styles.content_number}
                            textStyle={styles.text_number}

                        />
                    </TouchableOpacity>

                ))}
            </View>


        </Container>
    );
};

const styles = StyleSheet.create({
    content: {
        justifyContent: 'space-between'
    },
    content_header: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    content_value: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_number: {
        fontSize: 25,
        backgroundColor: colors.lighter11,
    },
    content_number: {
        width: 80,
        height: 60,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        backgroundColor: colors.lighter11,
        justifyContent: 'center'
    },
    content_btn: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        padding: 30
    },
});

export default EnterValue;
