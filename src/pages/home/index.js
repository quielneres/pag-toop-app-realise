import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View, Text, Alert} from 'react-native';


import {Container, FooterTab, Button, Content, Tab, Tabs, ScrollableTab} from 'native-base';
import FooterContent from '../../components/footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from "../../services/api";
import Load from '../../components/loader';
import {Header, ButtonGroup, ListItem, Image} from 'react-native-elements';
import colors from "../../components/styles/colors";
import {MaskService} from "react-native-masked-text";


const ls = require('react-native-local-storage');

const Home = ({navigation}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [transactions, setTransaction] = useState([]);
    const [selected, setSelected] = useState(0);
    const buttons = ['Sugestoes', 'Favoritos'];

    useEffect(() => {
        setLoading(true);
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? []);
            api.get('/my-last-orders/' + data.user.id)
                .then((res) => {
                    setTransaction(res.data.last_orders)
                });
        });


        setLoading(false);

    }, []);


    const renderFastMenu = i => (
        <TouchableOpacity key={i.id}
                          onPress={() => i.route ? navigation.navigate(i.route, i.action ? {action: i.action} : null) : Alert.alert('Nao implementdo')}
                          style={{
                              marginLeft: 15,
                              marginTop: 15,
                              width: 120,
                              alignItems: 'center',

                          }}
        >
            <Image style={{
                width: 50,
                height: 50,
                borderRadius: 100,
            }}
                   source={i.img_path}
            />
            <Text style={{textAlign: 'center', marginTop: 5}}>{i.title}</Text>
        </TouchableOpacity>
    );

    const renderPartners = p => (

        <View style={{
            margin: 20,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{width: 70, height: 70, marginBottom: 10}} source={p.img_path}/>
            <Text>{p.title}</Text>

        </View>
    );

    return (
        <Container>
            <Header
                statusBarProps={{barStyle: 'light-content'}}
                containerStyle={{
                    backgroundColor: colors.primary,
                }}
                barStyle="light-content"
                placement="left"
                centerComponent={{
                    text: 'Olá, ' + user.name,
                    style: {color: '#fff', marginBottom: 10, fontSize: 18, fontWeight: 'bold'}
                }}
                rightComponent={{icon: 'home', color: '#fff', marginBottom: 10,}}
            />
            <Content>
                <ButtonGroup
                    selectedIndex={selected}
                    onPress={setSelected}
                    buttons={buttons}
                    containerStyle={{width: '50%', borderColor: '#fff'}}
                    selectedButtonStyle={{backgroundColor: '#fff', borderBottomWidth: 1}}
                    innerBorderStyle={{width: 0}}
                    selectedTextStyle={{color: colors.regular}}
                />

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        selected === 0 ? suggestion.map((i) => renderFastMenu(i)) :
                            favirite.map((i) => renderFastMenu(i))
                    }
                </ScrollView>
                <View style={{borderTopWidth: 0.2, marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30%',
                        margin: 5,
                        borderRightWidth: 0.2,
                        flexDirection: 'row'
                    }}>
                        <Icon name={'check'} size={18} style={{marginRight: 10}} color={'green'}/>
                        <View>
                            <Text style={{fontSize: 10}}>Disponível</Text>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>R$ 0,00</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30%',
                        margin: 5,
                        flexDirection: 'row'
                    }}>
                        <Icon name={'spinner'} size={18} style={{marginRight: 10}} color={'orange'}/>
                        <View>
                            <Text style={{fontSize: 10}}>A liberar</Text>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>R$ 0,00</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30%',
                        margin: 5,
                        borderLeftWidth: 0.2,
                        flexDirection: 'row'
                    }}>
                        <Icon name={'hand-holding-usd'} size={18} style={{marginRight: 10}} color={'blue'}/>
                        <View>
                            <Text style={{fontSize: 10}}>Total</Text>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>R$ 0,00</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={{backgroundColor: colors.lighter9, padding: 15, fontWeight: 'bold'}}> Últimas
                        trasacões</Text>
                    {
                        transactions.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.items.product}
                                subtitle={
                                    <View>
                                        <Text>{item.items.detail}</Text>
                                        <Text>Valor: {MaskService.toMask('money', item.items.price)}</Text>
                                    </View>
                                }
                                // rightSubtitle={item.items.detail}
                                // leftIcon={{name: item.icon}}
                                bottomDivider
                                chevron
                            />
                        ))
                    }
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={{backgroundColor: colors.lighter9, padding: 15, fontWeight: 'bold'}}>Nossos
                        parceiros</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {partners.map((p) => renderPartners(p))}
                    </ScrollView>
                </View>
            </Content>
            <FooterContent navigation={navigation} action={'home'}/>
            {loading ? <Load/> : null}
        </Container>
    );
};
const suggestion = [

    {
        id: 2,
        title: 'Recarga de ' + "\n" + 'Celular',
        color: '',
        img_path: require('../../assets/icons-pagar/mobile-icon-10.png'),
        route: 'RechargeCell',
        action: null,
    },
    {
        id: 3,
        title: 'Cobrar',
        color: '',
        img_path: require('../../assets/icons-home/toDemand-icon.png'),
        route: 'ToDemand',
        action: null,
    },
    {
        id: 4,
        title: 'Gerar Link' + "\n" + 'de pagamento',
        color: '',
        img_path: require('../../assets/icons-home/pay-link-icon-2.png'),
        route: 'EnterValue',
        action: 'billet',
    },
    {
        id: 6,
        title: 'Pagar contas',
        color: '',
        img_path: require('../../assets/icons-home/pay-bill.png'),
        route: 'ToPay',
        action: null,
    },
    {
        id: 5,
        title: 'Transferir',
        color: '',
        img_path: require('../../assets/icons-home/transfer-icon.png'),
        route: 'Transfer',
        action: null,
    },
    {
        id: 1,
        title: 'Pagar QR-code',
        color: '',
        img_path: require('../../assets/icons-home/qrcode-icon.png'),
        route: null,
        action: null,
    },

];


const favirite = [
    {
        id: 1,
        title: 'Adicione um' + "\n" + 'Favorito',
        color: '',
        img_path: require('../../assets/icons-home/fovourite-icon.png'),
        route: null,
        action: null,
    }

];

const partners = [

    {
        id: 3,
        img_path: require('../../assets/icons-descontos/comercio.png'),
        title: 'Comercio'
    },
    {
        id: 2,
        img_path: require('../../assets/icons-descontos/farmacia.png'),
        title: 'Farmacias'
    },
    {
        id: 4,
        img_path: require('../../assets/icons-descontos/retsaurante.png'),
        title: 'Restaurantes'
    },
    {
        id: 1,
        img_path: require('../../assets/icons-descontos/supermarket.png'),
        title: 'Supermercados'
    }
];


export default Home;


