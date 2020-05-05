import React, {useState} from 'react';

import {
    ContentButton,
} from './styles';

import {
    Container, Left, Button, Content, Card, CardItem, Body,
    List, ListItem, Right, Form, Item, Picker, Text
} from 'native-base';

import {Hoshi} from 'react-native-textinput-effects';
import {View} from "react-native";
import {MaskService} from "react-native-masked-text";
import {validateAll} from "indicative/validator";
import api from "../../../services/api";
import Icon from 'react-native-vector-icons/FontAwesome';


import { Input } from 'react-native-elements';

const RechargeCell = ({navigation}) => {

    const [name, setName] = useState('');
    const [form, setForm] = useState(
        {
            number: '',
            operadora: '',
            error: {},
        }
    );

    const submit = async () => {

        const rules = {
            number: 'required',
            operadora: 'required|string'
        };

        const messages = {
            required: (field) => `${field} is required`,
        };

        try {

            await validateAll(form, rules, messages);

            navigation.navigate('Recharge', {data: form})


        } catch (err) {

            const formattedErrors = {};
            err.forEach(error => formattedErrors[error.field] = error.message);
            setForm({...form, error: formattedErrors})
        }
    };


    return (
        <Container>
            <Content>
                <Form style={{padding: 15}}>
                    <Input
                        placeholder="Número com DDD"
                        leftIcon={{type: 'font-awesome5', name: 'phone'}}
                        value={MaskService.toMask('cel-phone', form.number)}
                        onChangeText={number => setForm({...form, number})}
                        style={{marginBottom: 0, borderBottomWidth: 0.3, color: 'green'}}
                        // errorStyle={{ color: 'red' }}
                        // errorMessage={form.error['number']}
                    />
                    {form.error['number'] &&
                    <Text style={{fontSize: 12, color: 'red'}}>{form.error['number']}</Text>}
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder="Selcione uma operadora"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={form.operadora}
                        onValueChange={(value) => setForm({...form, operadora: value})}
                    >
                        <Picker.Item label="Selcione uma operadora" value="" />
                        <Picker.Item label="Claro" value="Claro" />
                        <Picker.Item label="Vivo" value="Vivo" />
                        <Picker.Item label="Tim" value="Tim" />
                        <Picker.Item label="Oi" value="Oi" />
                    </Picker>
                    {form.error['operadora'] &&
                    <Text style={{fontSize: 12, color: 'red'}}>{form.error['operadora']}</Text>}
                    <ContentButton>
                        <Button
                            style={{width: '100%', justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                            onPress={() => submit()}>
                            <Text>Avançar</Text>
                        </Button>
                    </ContentButton>
                </Form>
            </Content>
        </Container>
    );
};

export default RechargeCell;
