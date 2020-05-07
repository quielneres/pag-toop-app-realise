import React from 'react';


import {Container, Content} from 'native-base';
import FooterContent from "../../components/footer";
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ToPay = ({navigation}) => {

    const options = [
        {
            title: 'Contas e boletos',
            icon: 'barcode',
            route: 'PayBill',
            action: false,
            size: 16
        },
        {
            title: 'Recaga Celular',
            icon: 'mobile-alt',
            route: 'RechargeCell',
            action: false,
            size: 21
        },
        {
            title: 'Pagar com QR code',
            icon: 'qrcode',
            route: 'PayBill',
            action: false,
            size: 18
        },
        {
            title: 'Enviar dinheiro',
            icon: 'money-bill-alt',
            action: 'sendMoney',
            route: 'SendMoney',
            size: 16
        },

    ];

    return (
        <Container>
            <Content style={{margin: 10}}>
                {
                    options.map((item, i) => (
                        <ListItem
                            onPress={() => navigation.navigate(item.route, item.action ? {action: item.action} : null)}
                            key={i}
                            title={item.title}
                            leftIcon={<Icon name={item.icon} size={item.size}/>}
                            bottomDivider
                            chevron
                        />
                    ))
                }
            </Content>
            <FooterContent navigation={navigation} action={'toPay'}/>
        </Container>
    );
};

export default ToPay;
