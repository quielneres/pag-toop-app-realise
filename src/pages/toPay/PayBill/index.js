import React from 'react';

import {View, Image} from 'react-native';

import {Container, Content} from 'native-base';
import {Card, ListItem, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';


const PayBill = ({navigation}) => {

    const menu = [
        {
            id: 1,
            title: 'Usar leito de codigo de barras',
            route: 'ReadCode',
        },
        {
            id: 2,
            title: ' Digitar o codigo de barras manualmente',
            route: 'WriteBarcode',
            data_route: {brCode: '34191091070000013555851122200002157810000115300'}
        },
    ];

    return (
        <Container>
            <Content>
                <View>
                    <View style={{
                        padding: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#95BFB3'
                    }}>
                        <Image style={{width: 100, height: 50}}
                               source={require('../../../assets/icons-pagar/bar-code.png')}/>
                        <Text h4 style={{color: '#fff'}}>Pague suas contas</Text>
                    </View>
                    <Icon
                        name={'chevron-left'}
                        color={'#fff'}
                        size={25}
                        style={{position: 'absolute', margin: 25}}
                        onPress={() => navigation.goBack(null)}
                    />
                </View>
                {
                    menu.map((m) => (
                        <Card>
                            <ListItem
                                key={m.id}
                                leftAvatar={{source: require('../../../assets/icons-pagar/barcode-icon.png')}}
                                title={m.title}
                                onPress={() => navigation.navigate(m.route, m.data_route ? m.data_route : null)}
                            />
                        </Card>
                    ))
                }
            </Content>
        </Container>
    );
};

export default PayBill;
