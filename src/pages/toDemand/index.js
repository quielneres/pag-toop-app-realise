import React from 'react';

import {View, Image, Text} from 'react-native';
import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from './styles';

import {Container, Left, Thumbnail, Content, Card, CardItem, Body, List, ListItem, Right} from 'native-base';
import FooterContent from '../../components/footer';
import Icon from 'react-native-vector-icons/FontAwesome';


const Cobrar = ({navigation}) => {
    return (
        <Container>
            <View style={{width: '100%'}}>
                <Image
                    style={{width: '100%', height: 250}}
                    source={require('../../assets/Icons-cobrar/icon-cobrar.png')}
                />
                <Icon name={'chevron-left'} color={'#fff'} size={25} onPress={() => navigation.goBack(null)}
                    style={{position: 'absolute', margin: 20}}
                />
            </View>
            <Content>
                <List>
                    <ListItem button onPress={() =>
                        navigation.navigate('ProductList')}>
                        <Left>
                            <Text>Catalogo de produtos</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem button onPress={() =>
                        navigation.navigate('EnterValue', {action: 'billet'})}>
                        <Left>
                            <Text>Gerar link de boleto</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem button onPress={() => alert("Nao implemetado")}>
                        <Left>
                            <Text>Cabarar com maquineta</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <FooterContent navigation={navigation} action={'toDemand'}/>
        </Container>
    );
};

export default Cobrar;
