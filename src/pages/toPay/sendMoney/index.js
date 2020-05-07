import React from 'react';


import {Container, Content} from 'native-base';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ToPay = ({navigation}) => {

    const options = [
        {
            title: 'Contas e boletos',
            icon: 'barcode',
            route: 'PayBill',
            size: 16
        },
        {
            title: 'Recaga Celular',
            icon: 'mobile-alt',
            route: 'RechargeCell',
            size: 21
        },
        {
            title: 'Pagar com QR code',
            icon: 'qrcode',
            route: 'PayBill',
            size: 18
        },
        {
            title: 'Enviar dinheiro',
            icon: 'money-bill-alt',
            action: 'SendMoney',
            rout: null,
            size: 16
        },

    ];

    return (
        <Container>
            <Content style={{margin: 10}}>
                {
                    options.map((item, i) => (
                        <ListItem
                            onPress={() => navigation.navigate(item.route)}
                            key={i}
                            title={item.title}
                            leftIcon={<Icon name={item.icon} size={item.size}/>}
                            bottomDivider
                            chevron
                        />
                    ))
                }
            </Content>
            {/*<FooterContent navigation={navigation} action={'toPay'}/>*/}
        </Container>
    );
};

export default ToPay;
