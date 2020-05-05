import React from 'react';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from './styles';

import {Container, Left, Thumbnail, Content, Card, CardItem, Body} from 'native-base';


export default class Descontos extends React.Component {


    render() {
        return (
            <Container>
                <Content>
                    <Card style={{height:'100%'}}>
                        <CardItem>
                            <Left>
                                <Thumbnail style={{width: 40, height: 40}}
                                           source={require('../../assets/icons-descontos/parceiro-icone.png')}/>
                                <Body>
                                <Text>Nossos Praceiros</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <BlocoGeral>
                            <Coluna1>
                                <Card style={{alignItems: 'center'}}>
                                    <ImagenIcon
                                        source={require('./../../assets/icons-descontos/comercio.png')}/>
                                    <TextIcons>
                                        Comercios
                                    </TextIcons>
                                </Card>
                                <Card style={{alignItems: 'center'}}>
                                    <ImagenIcon
                                        source={require('./../../assets/icons-descontos/farmacia.png')}/>
                                    <TextIcons>
                                        Farmacias
                                    </TextIcons>
                                </Card>
                            </Coluna1>
                            <Coluna2>
                                <Card style={{alignItems: 'center'}}>
                                    <ImagenIcon
                                        source={require('./../../assets/icons-descontos/retsaurante.png')}/>
                                    <TextIcons>
                                        Restaurantes
                                    </TextIcons>
                                </Card>
                                <Card style={{alignItems: 'center'}}>
                                    <ImagenIcon
                                        source={require('./../../assets/icons-descontos/supermarket.png')}/>
                                    <TextIcons>
                                        Supermercados
                                    </TextIcons>
                                </Card>
                            </Coluna2>
                        </BlocoGeral>
                    </Card>
                </Content>
            </Container>
        );
    }
}
