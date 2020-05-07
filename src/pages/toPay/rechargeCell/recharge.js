import React, {useState} from 'react';

import {
    RechargeHeader,
    RechargeTitle,
    BlockNumber,
    Number,
    TextNumber,
    ContentNumbers,
    TextCifrao,
} from './styles';

import {
    Container, Left, Content, CardItem, Body,
    List, ListItem, Right, Form, Item, Picker
} from 'native-base';
import {View} from "react-native";
import {MaskService} from "react-native-masked-text";
import {Button, Card, Header, Text} from 'react-native-elements';
import colors from "../../../components/styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome';


const RechargeCells = ({navigation}) => {
    const [phone_info] = useState(navigation.getParam('data'));
    const [type, setType] = useState('clear');
    const [disabled, setDisabled] = useState(true);
    const [phoneData, setPhoneData] = useState(
        {
            number: '',
            operator: '',
            amount: 0,
        }
    );

    const RechargeValue = [
        {id: 1,number: 10},
        {id: 2,number: 13},
        {id: 3,number: 15},
        {id: 4,number: 20},
        {id: 5,number: 25},
        {id: 6,number: 30},
        {id: 7,number: 35},
        {id: 8,number: 40},
        {id: 9,number: 50},
        {id: 10,number: 100},

    ];


    const add_data = async (value) => {
        setPhoneData(
            {
                number: phone_info.number,
                operator: phone_info.operadora,
                amount: value
            }
        );
        // setType('solid');
        setDisabled(false)
    };

    const submitPaymentOptions = async () => {
        navigation.navigate('PaymentOptions', {payment_data: phoneData, action: 'cellular_recharge'})
    };

    const renderNumber = (v, i) => (
        <View style={{margin: 10, width: 100}} >
            <Button
                key={i}
                title={MaskService.toMask('money', v.number)}
                type={type}
                onPress={() => add_data(v.number)}
            />
        </View>
    );

    return (
        <Container>
            <Header
                containerStyle={{backgroundColor: colors.primary}}
                leftComponent={<Icon name={'chevron-left'} color={'#fff'} size={25}
                                     onPress={() => navigation.goBack(null)}/>}
                centerComponent={{
                    text: 'Reacarga de celular',
                    style: {fontSize: 16, color: '#fff', fontWeight: 'bold'}
                }}
            />
            <Content>
                <RechargeHeader>
                    <Text>Selecione um valor:</Text>
                    <Text h4>{MaskService.toMask('money', phoneData.amount)}</Text>
                </RechargeHeader>
                <View style={{flexWrap: 'wrap',flexDirection: 'row', justifyContent: 'center'}}>
                    {RechargeValue.map((n) => renderNumber(n))}
                </View>
                <View style={{alignItems: 'center'}}>
                    <Button
                        buttonStyle={{width: 300, justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                        onPress={() => submitPaymentOptions()}
                        disabled={disabled}
                        title="Prosseguir"
                    />
                </View>
            </Content>
        </Container>
    );
};

export default RechargeCells;
