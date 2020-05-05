import React, {useEffect, useState} from 'react';

import {validateAll} from 'indicative/validator';
import {Text, StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import {Hoshi} from 'react-native-textinput-effects';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';


import {
    Button,
    ButtonText,
} from './styles';
import Load from '../../components/loader';
import Modal from "../../components/modal";
import {MaskService} from "react-native-masked-text";
import moment from 'moment';
import {NavigationActions, StackActions} from "react-navigation";
const ls = require('react-native-local-storage');


const EditProfile = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data_user, setDataUSer] = useState(navigation.getParam('data_user'));

    const [form, setForm] = useState({
        name: data_user.name ?? '',
        email: data_user.email ?? '',
        birth: moment(data_user.birth).format('DD/MM/YYYY'),
        cpf: data_user.cpf ?? '',
        cnpj: data_user.cnpj ?? '',
        phone: data_user.phone_number ?? '',
        street: data_user.street ?? '',
        number_adress: data_user.number_adress ?? '',
        district: data_user.district ?? '',
        city: data_user.city ?? '',
        state: data_user.state ?? '',
        complement: data_user.complement ?? '',
        zipe_code: data_user.zipe_code ?? '',
        country: data_user.country ?? '',
    });

    const dataFrom = [
        {
            id: 1,
            type: 'input',
            name: 'Nome',
            value: form.name,
            setVal: value => setForm({...form, name: value})

        },
        {
            id: 2,
            type: 'input',
            name: 'Email',
            value: form.email,
            setVal: value => setForm({...form, email: value})
        },
        {
            id: 2,
            type: 'input',
            name: 'Nascimento',
            value: MaskService.toMask('datetime' ,form.birth),
            setVal: value => setForm({...form, birth: value})
        },
        {
            id: 3,
            type: 'input',
            name: 'CPF',
            value: MaskService.toMask('cpf', form.cpf),
            setVal: value => setForm({...form, cpf: value})
        },
        {
            id: 4,
            type: 'input',
            name: 'CNPJ',
            value: MaskService.toMask('cnpj', form.cnpj),
            setVal: value => setForm({...form, cnpj: value})
        },
        {
            id: 5,
            type: 'input',
            name: 'Celular',
            value: MaskService.toMask('cel-phone', form.phone),
            setVal: value => setForm({...form, phone: value})
        },
        {
            id: 8,
            type: 'input',
            name: 'Endereço/rua',
            value: form.street,
            setVal: value => setForm({...form, street: value})
        },
        {
            id: 9,
            type: 'input',
            name: 'Numero',
            value: form.number_adress,
            setVal: value => setForm({...form, number_adress: value})
        },
        {
            id: 10,
            type: 'input',
            name: 'Bairro',
            value: form.district,
            setVal: value => setForm({...form, district: value})
        },
        {
            id: 11,
            type: 'input',
            name: 'Cidade',
            value: form.city,
            setVal: value => setForm({...form, city: value})
        },
        {
            id: 12,
            type: 'input',
            name: 'Estado',
            value: form.state,
            setVal: value => setForm({...form, state: value})
        },
        {
            id: 14,
            type: 'input',
            name: 'Cep',
            value: MaskService.toMask('zip-code', form.zipe_code),
            setVal: value => setForm({...form, zipe_code: value})
        },
        {
            id: 13,
            type: 'input',
            name: 'Complemento',
            value: form.complement,
            setVal: value => setForm({...form, complement: value})
        },

    ];



    const registerUser = async () => {


        console.log(form);
        const rules = {
            name: 'required|string',
        };

        const messages = {
            required: (field) => `${field} is required`,
            'name': 'Nome contains unallowed characters',
            'email.email': 'Please enter a valid email address',
            'password.confirmed': 'The password did not match',
            'password.min': 'Password is too short',
        };

        try {
            setLoading(true);

            await validateAll(form, rules, messages)

            const response = await api.post('/update-user/' + data_user.id, form);

            const user = response.data;

            await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user));

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'App'})],
            });

            setModal(true);

            navigation.dispatch(resetAction);


            if (response.data.status === 'error') {

                // const e = response.data.data
                //
                // const formattedErrors = {};
                // e.forEach(error => formattedErrors[error.field] = error.message);
                // setError(formattedErrors)

            }

            if (response.data.status === true) {
                // navigation.navigate('Login', {new_count: true, email: email})

            }
            setLoading(false);

        } catch (e) {
            console.log(e)
            // const formattedErrors = {};
            // e.forEach(error => formattedErrors[error.field] = error.message);
            // setError(formattedErrors)
            setLoading(false);


        }
    }

    const renderErrorMsg = error => (
        <Text>{error}</Text>
    );

    const submitMessage = () => {
        setModal(false)
        navigation.goBack(null);
    };

    const renderForm = f => (
        <Hoshi
            label={f.name}
            backgroudColor={'#fff'}
            borderColor={'#4CB1F7'}
            borderHeight={1}
            inputPadding={20}
            style={{marginBottom: 20, borderBottomWidth: 0.5}}
            value={f.value}
            onChangeText={f.setVal}
        />
    );

    return (
        <Container>
            <Modal
                status={modal}
                menssage={'Dados atualizado com sucesso!'}
                action={() => submitMessage()}
                menssageBtn={'OK'}
            />
            <Content>
                <View style={styles.content}>
                    {dataFrom.map((f) => renderForm(f))}

                    <Button onPress={() => registerUser()}>
                        <ButtonText>Salvar</ButtonText>
                    </Button>

                </View>
            </Content>
            {loading ? <Load/> : null}
        </Container>
    )
};

const styles = StyleSheet.create({
    content: {
        // backgroundColor: '#4CB1F7'
        flex: 1,
        margin: 10
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


export default EditProfile;
