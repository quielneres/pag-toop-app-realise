import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';

import Styles from './Style';
import Valores from './Valores';
import ContaDigital from './ContaDigital';
import UltimasVendas from './UltimasVendas';

import {Container, FooterTab, Button, Content, Tab, Tabs, ScrollableTab} from 'native-base';
import FooterContent from '../../components/footer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from "../../services/api";
import Load from '../../components/loader';
import {Header, ButtonGroup, ListItem, Image} from 'react-native-elements';
import colors from "../../components/styles/colors";


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
            setUser(data.user ?? [])
        });

        api.get('ver-pedido-all')
            .then((res) => {
                setTransaction(res.data.pedido)
            })
        setLoading(false);

    }, []);

    const suggestion = [
        {
            id: 1,
            title: 'Pagar QR-code',
            color: ''
        },
        {
            id: 2,
            title: 'Recarga de ' + "\n" + 'Celular',
            color: ''
        },
        {
            id: 3,
            title: 'Cobrar',
            color: ''
        },
        {
            id: 4,
            title: 'Gerar Link' + "\n" + 'de pagamento',
            color: ''
        },
        {
            id: 5,
            title: 'Transferir',
            color: ''
        },
        {
            id: 6,
            title: 'Pagar Boleto',
            color: ''
        },

    ];


    const favirite = [
        {
            id: 1,
            title: 'Adicione um' + "\n" + 'Favorito',
            color: ''
        }

    ];

    const partners = [
        {
            id: 1,
            img_path: require('../../assets/icons-descontos/supermarket.png'),
            title: 'Supermercados'
        },
        {
            id: 2,
            img_path: require('../../assets/icons-descontos/farmacia.png'),
            title: 'Farmacias'
        },
        {
            id: 3,
            img_path: require('../../assets/icons-descontos/comercio.png'),
            title: 'Comercio'
        },
        {
            id: 4,
            img_path: require('../../assets/icons-descontos/retsaurante.png'),
            title: 'Restaurantes'
        },
    ];

    const renderFastMenu = i => (
        <View key={i.id}
              style={{
                  marginLeft: 15,
                  marginTop: 15,
                  width: 120,
                  alignItems: 'center',

              }}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 100,
                backgroundColor: 'grey'
            }}></View>
            <Text style={{textAlign: 'center', marginTop: 5}}>{i.title}</Text>
        </View>
    );

    const renderPartners = p => (

        <View style={{
            margin: 20,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{width:70, height: 70, marginBottom: 10}} source={p.img_path}/>
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
                    <Text style={{backgroundColor: colors.lighter9, padding: 15, fontWeight: 'bold'}}>Ultimas
                        trasacoes</Text>
                    {
                        transactions.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.cadastro}
                                subtitle={
                                    <View>
                                        <Text>{item.nome_comprador}</Text>
                                        <Text>Valor: {item.total}</Text>
                                    </View>
                                }
                                leftIcon={{name: item.icon}}
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


export default Home;


