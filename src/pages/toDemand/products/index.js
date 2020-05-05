import React from 'react';

import {ScrollView, TouchableOpacity, View, Text} from 'react-native';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from '../styles';

import {Container, Left, Right, Thumbnail, Content, Header, ListItem, Body, List, CardItem, Card} from 'native-base';


export default class Index extends React.Component {
    render() {

        const products = [
            {
                itens: [
                    {
                        title: 'Apple Watch',
                        content: 'Apple Watch Serie 5 44mm GPS/Caixa de Alumínio Cinza Espacial com Pulseira Esportiva Preto',
                        price: '2500',
                        descount: '20',
                        image_url: 'https://www.dhresource.com/600x600/f2/albu/g10/M01/E8/78/rBVaVlwgz-KAUc-zAABW8VP24l0964.jpg',
                    },
                    {
                        title: 'Dados básicos',
                        content: 'Nome, telefone, e-mail, gênero',
                        price: '2500',
                        descount: '20',
                        image_url: 'https://img.r7.com/images/produtos-eletronicos-amazon-15072019112812168',
                    },
                    {
                        title: 'Dados básicos',
                        content: 'Nome, telefone, e-mail, gênero',
                        price: '2500',
                        descount: '20',
                        image_url: 'https://img.r7.com/images/produtos-eletronicos-amazon-15072019112810661?dimensions=600x315&crop_position=c',
                    },
                    {
                        title: 'Dados básicos',
                        content: 'Nome, telefone, e-mail, gênero',
                        price: '2500',
                        descount: '20',
                        image_url: 'https://www.dhresource.com/600x600/f2/albu/g10/M01/E8/78/rBVaVlwgz-KAUc-zAABW8VP24l0964.jpg',
                    }
                ],
            }
        ];

        const render = (p) => (
            <View>
                {p.itens.map((i) => (
                    <List>
                        <ListItem avatar onPress={() =>
                            this.props.navigation.navigate('CheckoutProduct', {data: i})}>
                            <Left>
                                <Thumbnail
                                    source={{uri: i.image_url }}/>
                            </Left>
                            <Body>
                            <Text style={{fontWeight: 'bold'}}>{i.title}</Text>
                            <Text note>{i.content}</Text>
                            </Body>
                            <Right>
                                <Text note>R$ {i.price}</Text>
                            </Right>
                        </ListItem>
                    </List>
                ))}
            </View>
        );

        return (
            <Container>
                {/*<Header/>*/}
                <Content>
                    {products.map((p) => render(p))}
                </Content>
            </Container>
        );
    }
}
