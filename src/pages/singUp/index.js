import React, {useState} from 'react';

import {validateAll} from 'indicative/validator';
import {Text, StyleSheet, View, Alert, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Container, Card, Content, Form, CardItem, Item, Input, Label} from 'native-base';
import {Hoshi} from 'react-native-textinput-effects';
import api from '../../services/api';

import {
    Button,
    ButtonText,
} from './styles';
import Load from '../../components/loader';
import Modal from "../../components/modal";

const SingUp = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirm] = useState('');
    const [userData, setUserData] = useState('');
    const [error, setError] = useState({});
    const [error_server, setErrorServer] = useState([]);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);


    const registerUser = async () => {

        const data = {
            name: name,
            email: email,
            password: password,
        };

        // console.log(data);
        const rules = {
            name: 'required|string',
            email: 'required|email',
            password: 'required|string|min:4',
        };

        const messages = {
            required: (field) => `${field} is required`,
            'name': 'Nome contains unallowed characters',
            'email.email': 'Please enter a valid email address',
            'password.confirmed': 'The password did not match',
            'password.min': 'Password is too short',
        }

        try {
            setLoading(true);

            await validateAll(data, rules, messages)

            const response = await api.post('/register-user', data);

            setUserData(response);

            if (response.data.status === 'error') {

                // const e = response.data.data
                //
                // const formattedErrors = {};
                // e.forEach(error => formattedErrors[error.field] = error.message);
                // setError(formattedErrors)

            }

            if (response.data.status === 'success') {
                // navigation.navigate('Login', {new_count: true, email: email})
                setModal(true)
            }
            setLoading(false);

        } catch (e) {
            const formattedErrors = {};
            e.forEach(error => formattedErrors[error.field] = error.message);
            setError(formattedErrors)
            setLoading(false);


        }
    }

    const renderErrorMsg = error => (
        <Text>{error}</Text>
    );

    const submitMessage = () => {
        setModal(false)
        navigation.navigate('Login', {email: email})
    }

    return (
        <Container>
            <Modal
                status={modal}
                menssage={'Conta criada com sucesso!'}
                action={() => submitMessage()}
                menssageBtn={'FAZER LOGIN'}
            />
            <Content>
                <View style={styles.content}>
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
                    {error['name'] && <Text style={{fontSize: 12, color: 'red'}}>{error['name']}</Text>}
                    <Hoshi
                        label={'E-mail'}
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={5}
                        style={{marginBottom: 20, borderBottomWidth: 0.5}}
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    {error['email'] && <Text style={{fontSize: 12, color: 'red'}}>{error['email']}</Text>}
                    <Hoshi
                        label={'Senha'}
                        secureTextEntry
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={5}
                        style={{marginBottom: 20, borderBottomWidth: 0.5}}
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                    {error['password'] && <Text style={{fontSize: 12, color: 'red'}}>{error['password']}</Text>}
                    <Hoshi
                        label={'Confirmar Senha'}
                        secureTextEntry
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={5}
                        style={{marginBottom: 50, borderBottomWidth: 0.5}}
                        value={password_confirmation}
                        onChangeText={password_confirmation => setPasswordConfirm(password_confirmation)}
                    />

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


export default SingUp;
