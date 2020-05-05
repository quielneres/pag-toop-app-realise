import React, {useState} from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import {Container, Card, Button, Content, Form, CardItem, Footer, Text, Item, Input, Label} from 'native-base';

const FormCard = ({navigation}) => {

    const [form, setForm] = useState(
        {
            numberCard: null,
            nameCard: null,
            expiracao: null,
            cvc: null,
            name: null,
            email: null,
            nascimento: null,
            cpf: null,
            telefone: {
                ddd: null,
                number: null
            }
        }
    )

    return (
        <Form>
            <Item floatingLabel>
                <Label>Numero do cartoa</Label>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite seu usuário"
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                    value={form.numberCard}
                    onChangeText={value => setForm({numberCard: value})}
                />
            </Item>
            <Item floatingLabel last>
                <Label>Nome cartao</Label>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite seu usuário"
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                    value={form.nameCard}
                    onChangeText={value => setForm({nameCard: value})}
                />
            </Item>
            <Item floatingLabel last>
                <Label>Expiraçao</Label>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite seu usuário"
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                    value={form.expiracao}
                    onChangeText={value => setForm({expiracao: value})}
                />
            </Item>
            <Item floatingLabel last>
                <Label>CVC</Label>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite seu usuário"
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                    value={form.cvc}
                    onChangeText={value => setForm({cvc: value})}
                />
            </Item>
        </Form>
    )
}

export default FormCard;
