import React, {useState} from 'react';

import {StatusBar, ActivityIndicator, Image, View, Text, TouchableOpacity} from 'react-native';

import {
    Button,
    ButtonText,
} from './styles';


import {Container, Header, Content, Card, CardItem, Left} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Welcome = ({navigation, message}) => {
    return (
        <Container>
            <Content style={{backgroundColor: '#4CB1F7'}}>
                <Card transparent style={{height: 500, justifyContent: 'flex-end'}}>
                    <CardItem style={{margin: 15, backgroundColor: '#4CB1F7'}}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
                            Bem-vindo!
                        </Text>
                    </CardItem>
                    <CardItem style={{margin: 15, flexDirection: 'column', backgroundColor: '#4CB1F7'}}>
                        <Button full light style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%',
                            borderRadius: 7,
                            backgroundColor: 'white',
                        }}>
                            <Icon name={'google'} size={18}/>
                            <View style={{ marginLeft: 10}}>
                                <Text>Login com o google</Text>
                            </View>
                        </Button>
                        <Button full light style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%',
                            borderRadius: 7,
                            backgroundColor: 'white',
                            marginTop: 10,
                        }}
                                    onPress={() => navigation.navigate('CreateAccount')}
                        >
                            <Text style={{  }}>Criar uma conta</Text>
                        </Button>
                    </CardItem>
                    <CardItem style={{ backgroundColor: '#4CB1F7', justifyContent: 'center'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                            Ja tem uma conta?
                        </Text>
                        <TouchableOpacity style={{ marginLeft: 10}}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Entrar</Text>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

export default Welcome;
