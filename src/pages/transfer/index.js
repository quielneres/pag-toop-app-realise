import React from 'react';

import {
    StyleSheet,   Picker
} from 'react-native';


import {
    Content,
    Saldo,
    TextoSaldo,
    ValorSaldo,
    ContentUsuario,
    Select,
    Usuario,
    ContentValorTransferir,
    TextInput,
    InputValor,
    BtnTransferir,
} from './styles';

export default class Transferir extends React.Component {
    state = {user: ''}
    updateUser = (user) => {
        this.setState({user: user})
    }

    render() {
        return (
            <Content>
                <Saldo>
                    <TextoSaldo>Saldo:</TextoSaldo>
                    <ValorSaldo>R$ 150,00</ValorSaldo>
                </Saldo>
                <ContentUsuario>
                    <Select selectedValue={this.state.user} onValueChange={this.updateUser}>
                        <Picker.Item label="Selecine um usuario" value=""/>
                        <Picker.Item label="Steve" value="steve"/>
                        <Picker.Item label="Ellen" value="ellen"/>
                        <Picker.Item label="Maria" value="maria"/>
                    </Select>
                    <Usuario style={styles.text}>{this.state.user}</Usuario>
                </ContentUsuario>
                <ContentValorTransferir>
                    <TextInput>
                        Digite o valor:
                    </TextInput>
                    <InputValor
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText=""
                        value="0,00"
                    />
                    <BtnTransferir
                        style={{ marginTop: 20}}
                        onPress=""
                        title="Transferir"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </ContentValorTransferir>
            </Content>
        );
    }
}

const styles = StyleSheet.create({

    profileContainer: {

        padding: 0,
        zIndex: 1
    },
    profileBackground: {

        height: 0.6
    },

    info: {
        marginTop: 30,
        paddingHorizontal: 10,
        height: 0.8
    },
    avatarContainer: {
        position: 'relative',
        marginTop: -80
    },
    avatar: {


        borderRadius: 50,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',


    },
    social: {


        justifyContent: 'center',
        zIndex: 99,
        marginHorizontal: 5
    }
});
