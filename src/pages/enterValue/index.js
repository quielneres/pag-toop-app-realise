import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Alert, TouchableOpacity} from "react-native";


import {
    Container, Content, Right, Body, Footer
} from "native-base";

import colors from '../../components/styles/colors'

import Icon from 'react-native-vector-icons/FontAwesome5';
import api from "../../services/api";

import Load from '../../components/loader';
import {MaskService} from 'react-native-masked-text';
import Modal from "../../components/modal";
import WorningModal from "../../components/modal/worning";


import {Card, Header, Button, Badge, Text} from 'react-native-elements'


const EnterValue = ({navigation}) => {
    const number = [
        {id: 1, number: 1},
        {id: 2, number: 2},
        {id: 3, number: 3},
        {id: 4, number: 4},
        {id: 5, number: 5},
        {id: 6, number: 6},
        {id: 7, number: 7},
        {id: 8, number: 8},
        {id: 9, number: 9},
        {id: 10, number: 0},
        {id: 11, number: 11},
    ];
    const data_response = {
        expire: '13/05/2020',
        barCode: '34191.09024 23086.220193 61309.830000 6 82510000002306',
        link: 'https://sandbox.moip.com.br/v2/boleto/BOL-3F8VTINHIPNQ',
        email: 'quielneres@gmail.com',
    };
    const [action] = useState(navigation.getParam('action'));

    const [data_transaction, setDataTransaction] = useState(
        {
            title: '',
            value: 0,
            title_value: '',

        }
    );

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [title_value, setTitleValue] = useState(0);
    const [numeral] = useState({numeral: []});

    useEffect(() => {

        if (action === 'billet') {

            setDataTransaction(
                {
                    ...data_transaction,
                    title: 'Boleto de cobrança',
                    title_value: 'Qual o valor da Cobrança?',
                }
            );
        }

    }, []);

    const manageKeybord = n => {
        console.log(n);
        if (n !== 11) {
            numeral.numeral.push(n);
            setDataTransaction({...data_transaction, value: numeral.numeral.join('')})
        } else {
            {
                numeral.numeral.join('') >= 0 ?
                    numeral.numeral.pop() : null
            }
            setDataTransaction({...data_transaction, value: numeral.numeral.join('')})
        }
    };

    const submit = () => {
        navigation.navigate('Response', {data: data_transaction, data_response: data_response});
    };

    return (
        <Container style={styles.content}>
            <Header
                containerStyle={{backgroundColor: colors.primary}}
                leftComponent={<Icon name={'chevron-left'} color={'#fff'} size={25}
                                     onPress={() => navigation.goBack(null)}/>}
                centerComponent={{
                    text: data_transaction.title,
                    style: {fontSize: 16, color: '#fff', fontWeight: 'bold'}
                }}
            />
            <View style={styles.content_value}>
                <Text style={{fontSize: 16}}>{data_transaction.title_value}</Text>
                <Text h3>{MaskService.toMask('money', data_transaction.value)}</Text>
            </View>
            <View style={styles.content_btn}>
                <View style={{alignItems: 'center', marginBottom: 30}}>
                    <Button
                        buttonStyle={{width: 300, justifyContent: 'center', backgroundColor: '#4CB1F7'}}
                        onPress={() => submit()}
                        disabled={data_transaction.value > 0 ? false : true}
                        title="Prosseguir"
                    />
                </View>

                {number.map((n) => (
                    <TouchableOpacity onPress={() => manageKeybord(n.number)}>
                        {n.id === 11 ?
                            <View style={styles.content_icon}>
                                <Icon name={'caret-left'} size={35} color={'#fff'}/>
                            </View>
                            :
                            <Badge
                                key={n.id}
                                value={n.number}
                                containerStyle={styles.content_number}
                                textStyle={styles.text_number}

                            />
                        }
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
    content_icon: {
        width: 80,
        height: 60,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        backgroundColor: colors.lighter11,
        justifyContent: 'center',
        alignItems: 'center'
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
