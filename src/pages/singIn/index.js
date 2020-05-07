import React, {useState, useEffect} from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {StatusBar, ActivityIndicator, Image, View, Alert} from 'react-native';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import {
    Container,
    Title,
    TextInformation,
    Error,
    Button,
    Form,
    ButtonText,
    TextSingUp,
    ContentSingUp,
    CreateCount,
} from './styles';

import {Input,  Text} from "react-native-elements";

import Icon from 'react-native-vector-icons/FontAwesome5'
import Modal from '../../components/modal';
import colors from '../../components/styles/colors'

export default function Welcome(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [new_email, setNewEmail] = useState(props.navigation.getParam('email'));

    useEffect(() => {
        {
            new_email ? setUsername(new_email) : null
        }
    });

    async function saveUser(user) {

        await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user));
    };

    async function signIn() {
        if (username.length === 0) {
            return;
        }

        setLoading(true);

        try {
            const credentials = {
                email: username,
                password: password,
            };

            const response = await api.post('/auth/login', credentials);

            const user = response.data;

            await saveUser(user);

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'Home'})],
            });

            setLoading(false);

            props.navigation.dispatch(resetAction);
        } catch (err) {
            console.log(err);

            setLoading(false);
            setErrorMessage('Usuário não existe');
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content"/>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: 100, height: 55}} source={require('../../assets/logo.jpg')}/>
            </View>

            {!!errorMessage && <Error>{errorMessage}</Error>}

            <Form>
                <Input
                    autoCapitalize="none"
                    inputContainerStyle={{borderColor: colors.primary}}
                    autoCorrect={false}
                    placeholder="Digite seu usuário"
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                    value={username}
                    leftIcon={<Icon name={'user-alt'}  size={16}/>}
                    onChangeText={username => setUsername(username)}
                />

                <Input
                    inputContainerStyle={{borderColor: colors.primary}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite sua senha"
                    // underlineColorAndroid="rgba(0, 0, 0, 0)"
                    secureTextEntry={true}
                    leftIcon={<Icon name={'unlock-alt'}  size={16}/>}
                    value={password}
                    onChangeText={password => setPassword(password)}
                />

                {/*<Button*/}
                    {/*containerStyle={{marginTop: 30, backgroundColor:  colors.primary, margin: 10}}*/}
                    {/*onPress={signIn}*/}
                    {/*title={'Entrar'}*/}
                {/*/>*/}

                <Button onPress={signIn}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFF"/>
                    ) : (
                        <ButtonText>Entrar</ButtonText>
                    )}
                </Button>
            </Form>
            <ContentSingUp>
                <TextSingUp>Não tem uma conta?</TextSingUp>
                <CreateCount
                    onPress={() => props.navigation.navigate('CreateAccount')}
                >
                    <TextSingUp>Criar</TextSingUp>
                </CreateCount>
            </ContentSingUp>
        </Container>
    );
}

Welcome.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

Welcome.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func,
    }).isRequired,
};
