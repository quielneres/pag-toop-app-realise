import React from 'react';


import {Container, Content} from 'native-base';
import FooterContent from "../../components/footer";
import {Header, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from "../../components/styles/colors";

const ToPay = ({navigation}) => {
    return (
        <Container>
            <Header
                containerStyle={{backgroundColor: colors.primary}}
                leftComponent={<Icon name={'chevron-left'} color={'#fff'} size={25}
                                     onPress={() => navigation.goBack(null)}/>}
                centerComponent={{
                    text: 'Pagamentos',
                    style: {fontSize: 16, color: '#fff', fontWeight: 'bold'}
                }}
            />
            <Content style={{margin: 10}}>
                {
                    options.map((item, i) => (
                        <ListItem
                            onPress={() => navigation.navigate(item.route, item.action ? {action: item.action} : null)}
                            key={i}
                            title={item.title}
                            // leftIcon={<Icon name={item.icon} size={item.size}/>}
                            leftAvatar={{source: item.avater_path}}
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

const options = [
    {
        title: 'Contas e boletos',
        icon: 'barcode',
        route: 'PayBill',
        action: false,
        avater_path: require('../../assets/icons-pagar/barcode-icon.png')

    },
    {
        title: 'Recaga Celular',
        icon: 'mobile-alt',
        route: 'RechargeCell',
        action: false,
        avater_path: require('../../assets/icons-pagar/mobile-icon-10.png')

    },
    {
        title: 'Pagar com QR code',
        icon: 'qrcode',
        route: 'PayBill',
        action: false,
        avater_path: require('../../assets/icons-pagar/qr-code-pay-icon.png')

    },
    {
        title: 'Enviar dinheiro',
        icon: 'money-bill-alt',
        action: 'sendMoney',
        route: 'SendMoney',
        avater_path: require('../../assets/icons-pagar/send-money.png')

    },

];

export default ToPay;
