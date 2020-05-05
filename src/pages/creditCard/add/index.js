import React, {useState, useEffect} from 'react';

import {View} from 'react-native';
import {
    Container,
    Content,
    Form,
    Text,
} from 'native-base';
import {validateAll} from 'indicative/validator';
import api from "../../../services/api";

import {Hoshi} from 'react-native-textinput-effects';
import {MaskService} from "react-native-masked-text";
import Load from '../../../components/loader';
import Modal from "../../../components/modal";
const ls = require('react-native-local-storage');
import {Button} from 'react-native-elements'

const Cards = ({navigation}) => {
    const [user, setUser] = useState([]);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        number_card: '',
        name_holder: '',
        expiration: '',
        cvc: '',
        error: {},
        error_server: '',
    });

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);

    const submit = async (data) => {

        const rules = {
            number_card: 'required',
            name_holder: 'required|string',
            expiration: 'required',
            cvc: 'required',
        };

        const messages = {
            required: (field) => `${field} is required`,
        };

        try {
            setLoading(true);

            await validateAll(form, rules, messages);
            const response = await api.post('/credit-card-creat/' + user.id, form);

            const data_server = response.data;
            setModal(true)

            setLoading(false);

        } catch (err) {

            const formattedErrors = {};
            err.forEach(error => formattedErrors[error.field] = error.message);
            setForm({...form, error: formattedErrors})
            setLoading(false);
        }
    };

    const submitMessage = () => {
        setModal(false)
        navigation.navigate('Cartoes')
    };

    return (
        <Container>
            <Modal
                status={modal}
                menssage={'Cadastrado com sucesso!'}
                action={() => submitMessage()}
                menssageBtn={'OK'}
            />
            <Content>
                <Text>{form.error_server}</Text>
                <Form style={{margin: 10}}>
                    <Hoshi
                        style={{marginBottom: 0, borderBottomWidth: 0.5}}
                        label={'Número do cartão'}
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={20}
                        keyboardType={'numeric'}
                        value={MaskService.toMask('credit-card', form.number_card)}
                        onChangeText={value => setForm({...form, number_card: value})}
                    />
                    {form.error['number_card'] &&
                    <Text style={{fontSize: 12, color: 'red'}}>{form.error['number_card']}</Text>}
                    <Hoshi
                        style={{marginTop: 15, borderBottomWidth: 0.5}}
                        label={'Nome do titullar'}
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={20}
                        value={form.name_holder}
                        onChangeText={value => setForm({...form, name_holder: value})}
                    />
                    {form.error['name_holder'] &&
                    <Text style={{fontSize: 12, color: 'red'}}>{form.error['name_holder']}</Text>}
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ width: '60%'}}>
                            <Hoshi
                                style={{marginTop: 15, borderBottomWidth: 0.5}}
                                label={'Expiração'}
                                backgroudColor={'#fff'}
                                borderColor={'#4CB1F7'}
                                borderHeight={1}
                                inputPadding={20}
                                value={MaskService.toMask('datetime', form.expiration, {format: 'MM/yy'})}
                                onChangeText={value => setForm({...form, expiration: value})}
                            />
                            {form.error['expiration'] &&
                            <Text style={{fontSize: 12, color: 'red'}}>{form.error['expiration']}</Text>}
                        </View>
                        <View style={{ width: '30%', marginLeft: '10%'}}>
                            <Hoshi
                                style={{marginTop: 15, borderBottomWidth: 0.5}}
                                label={'CVC'}
                                backgroudColor={'#fff'}
                                borderColor={'#4CB1F7'}
                                borderHeight={1}
                                inputPadding={20}
                                value={MaskService.toMask('custom', form.cvc, {mask: '999'})}
                                onChangeText={value => setForm({...form, cvc: value})}
                            />
                            {form.error['cvc'] &&
                            <Text style={{fontSize: 12, marginBottom: 50, color: 'red'}}>{form.error['cvc']}</Text>}
                        </View>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <Button
                            buttonStyle={{width: 300, justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 40}}
                            onPress={() => submit(form)}
                            title="Prosseguir"
                        />
                    </View>
                </Form>
            </Content>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default Cards;


