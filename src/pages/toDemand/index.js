import React from 'react';

import {View, Image, Text} from 'react-native';
import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from './styles';

import {Container, Left, Thumbnail, Content, Card, CardItem, Body, Icon, List, ListItem, Right} from 'native-base';
import FooterContent from '../../components/footer';


const Cobrar = ({navigation}) => {
    return (
        <Container>
            <Content>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        style={{width: '100%', height: 250}}
                        source={require('../../assets/Icons-cobrar/icon-cobrar.png')}
                    />
                </View>

                <List>
                    <ListItem button onPress={() =>
                        navigation.navigate('ProductList')}>
                        <Left>
                            <Text>Catalogo de produtos</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem button onPress={() =>
                        navigation.navigate('EnterValue', {action: 'billet'})}>
                        <Left>
                            <Text>Gerar link de boleto</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem button onPress={() => alert("Nao implemetado")}>
                        <Left>
                            <Text>Cabarar com maquineta</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <FooterContent navigation={navigation} action={'toDemand'}/>
        </Container>
    );
};

export default Cobrar;
