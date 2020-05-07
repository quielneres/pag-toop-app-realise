import React from 'react';

import {StyleSheet, View, Alert} from 'react-native'
import {Container, Content} from 'native-base';
import {Header, ListItem, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from "../../../components/styles/colors";

const ToPay = ({navigation}) => {


    return (
        <Container>
            <Header
                containerStyle={{backgroundColor: colors.primary}}
                leftComponent={<Icon name={'chevron-left'} color={'#fff'} size={25}
                                     onPress={() => navigation.goBack(null)}/>}
                centerComponent={{
                    text: 'Enivar dinheiro',
                    style: {fontSize: 16, color: '#fff', fontWeight: 'bold'}
                }}
            />
            <Content style={{margin: 10}}>
                <View style={styles.content_text_top}>
                    <Text>Escolha como você quer adicionar dinheiro à sua conta PagToop.</Text>
                </View>
                {
                    menu_options.map((item, i) => (
                        <ListItem
                            onPress={() =>
                                item.route ? navigation.navigate(item.route, item.action ? {action: item.action} : null) :
                                    Alert.alert('nao implementado')
                            }
                            key={i}
                            title={item.title}
                            subtitle={item.subtitle}
                            rightAvatar={{source: item.path_avatar}}
                            bottomDivider
                        />
                    ))
                }
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    content_text_top: {
        padding: 15,
        borderBottomWidth: 0.3
    },
});

const menu_options = [
    {
        id: 1,
        title: 'Débito online',
        subtitle: 'Adicione saldo com débito virtual',
        path_avatar: require('../../../assets/icons-pagar/debit-icon.jpg'),
        route: null,
        action: null,
    },
    {
        id: 1,
        title: 'Boleto bancário',
        subtitle: 'disponível em até 2 dias úteis',
        path_avatar: require('../../../assets/icons-pagar/barcode-icon.png'),
        route: 'EnterValue',
        action: 'send_money',
    },
    {
        id: 1,
        title: 'Transferência bancária ',
        subtitle: 'TED - Em até 1h. DOC - Próximo dia útil',
        path_avatar: require('../../../assets/icons-pagar/bank-transfer.jpg'),
        route: null,
        action: null,
    },

];

export default ToPay;
