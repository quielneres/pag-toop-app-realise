import React, {useEffect, useState} from 'react';

import {

    ContentButton,
    ContentPayment,
} from './styles';

import {
    Container, Left, Content,
    Right
} from 'native-base';


import {View, Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from "../../components/loader";
import api from "../../services/api";

const ls = require('react-native-local-storage');
import Modal from "../../components/modal";
import WorningModal from "../../components/modal/worning";

import {Button, ListItem, Card, CheckBox} from 'react-native-elements';

import {Boleto} from "broleto";
import {MaskService} from "react-native-masked-text";


const RechargePay = ({navigation}) => {

    const [user, setUser] = useState([]);
    const [card, setCard] = useState([]);
    const [payment_data] = useState(navigation.getParam('payment_data'));
    const [action] = useState(navigation.getParam('action'));
    const [modal, setModal] = useState(false);
    const [header, setHeader] = useState(
        {
            title: '',
            value: 0,
            avatar: ''
        }
    );
    const [detail, setDetail] = useState([]);
    const [payment_method, setPayment] = useState(1);
    const [payment_status, setPaymentStatus] = useState(
        {
            billet: true,
            card: false
        }
    );


    const [cellNumber, setCellNumber] = useState(navigation.getParam('cellNumber'));
    const [operadora, setOperadora] = useState(navigation.getParam('operadora'));
    const [loading, setLoading] = useState(false);
    const [link, setLink] = useState(null);
    const [myBalance, setBalance] = useState(5);


    const [modal_worning, setModalWorning] = useState(
        {
            message: '',
            route: '',
            status: false
        }
    );

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
            setCard(data.card ?? [])
        });

        if (action === 'pay_the_bills') {
            setHeader({
                title: 'Contas Diversas',
                value: new Boleto(payment_data.barCode).amount() ?? 0,
                avatar: require('../../assets/icons-pagar/barcode-icon.png')
            });

            setDetail([
                {
                    title: 'Detalhes:',
                    subtitle: payment_data.description
                }
            ]);

            setPaymentStatus({...payment_status, billet: false});
            setPayment(2)
        }

        if (action === 'cellular_recharge') {
            setHeader({
                title: 'Recarga de celular',
                value: payment_data.amount ?? 0,
                avatar: require('../../assets/icons-pagar/mobile-icon-10.png')
            });

            setDetail([
                {
                    title: 'Número:',
                    subtitle: payment_data.number
                },
                {
                    title: 'Operadora:',
                    subtitle: payment_data.operator
                }
            ]);
        }

        {card ? setPaymentStatus({...payment_status, card: true}) : null}

    }, []);

    console.log(card)

    const payments_methods = [

        {
            id: 1,
            method: 'Boleto',
            status: payment_status.billet,
            icon: 'barcode'
        },
        {
            id: 2,
            method: 'Usar saldo (Meu saldo: 0,00)',
            status: true,
            icon: 'money-bill'
        },
        {
            id: 3,
            method: '',
            status: payment_status.card,
            icon: 'credit-card'
        },
    ];


    const submit = async (pay_method) => {

        setLoading(true);
        const itens = {
            id_comprador: user.id_comprador,
            valor: header.value,
            preco: header.value,
            quantidade: 1,
            descricao: 'Recarga',
            detalhes: 'Recarga Celular',
            payment_method: pay_method,
            cell_number: action === 'cellular_recharge' ? payment_data.number : null,
            operadora_name: action === 'cellular_recharge'? payment_data.operator : null
        };

        try {
            const response = await api.post('/new-request', itens);
            const data_server = response.data;

            {
                data_server.status === true ? setLink(data_server.link_boleto) : null
            }
            setLoading(false);
            setModal(true);
        } catch (err) {
            console.log(err)
            setLoading(false);
        }
    };

    const condition = () => {
        {
            payment_method === 2 ?
                myBalance >= value ? submit(2) : setModalWorning({
                    message: 'Seu saldo e inferior ao necessario!',
                    route: 'Profile',
                    status: true
                })
                : null
        }

        {
            payment_method === 3 ?
                user.card ? submit(3) : setModalWorning({
                    message: 'Voce nao tem um cartao selecionado!',
                    route: 'CreditCard',
                    status: true
                })
                : null
        }

    };

    const boletoGeneration = () => {
        {
            user.id_comprador ?
                payment_method === 1 ? submit(1) : condition()
                :
                setModalWorning({
                    message: 'Complete o cadastro para continuar!',
                    route: 'EditProfile',
                    status: true
                })
        }
    };

    const rendPayments = payment => (
        <View>
            {
                payment.status ?
                    payment.id === 3 ?
                        <CheckBox
                            textStyle={{width: '100%'}}
                            title={card.first6 + ' **** ' + card.last4}
                            checked={payment_method === payment.id ? true : false}
                            onPress={() => setPayment(payment.id)}
                        />
                        :
                        <CheckBox
                            textStyle={{width: '100%'}}
                            title={payment.method}
                            checked={payment_method === payment.id ? true : false}
                            onPress={() => setPayment(payment.id)}
                        />
                    : null
            }
        </View>
    );

    const renderBarCode = d => (
        <ListItem
            roundAvatar
            title={d.title}
            subtitle={d.subtitle}
        />
    );

    const renderCellularRecharge = d => (
        <ListItem
            roundAvatar
            title={d.title}
            titleStyle={{ width: '40%'}}
            rightSubtitle={d.subtitle}
            rightSubtitleStyle={{ width: 200, textAlign: 'right'}}
        />
    );

    const submitMessage = () => {
        setModal(false);
        navigation.navigate('OrderDetail', {
            data: {
                method: 1,
                origin: 'recharge',
                link: link,
                title: 'Recaga celular',
                number: action === 'cellular_recharge' ? payment_data.number : null,
                opera: action === 'cellular_recharge' ? payment_data.operator : null,
                value: header.value
            }
        })
    };

    const submitWorning = () => {
        setModalWorning(false);
        navigation.navigate(modal_worning.route, {data_user: user})
    };

    return (
        <Container>
            <Modal
                status={modal}
                menssage={'Operaçao realizada com sucesso!'}
                action={() => submitMessage()}
                menssageBtn={'OK'}
            />
            <WorningModal
                status={modal_worning.status}
                menssage={modal_worning.message}
                action={() => submitWorning()}
                menssageBtn={'OK'}
            />
            <Content>
                <Card>
                    <ListItem
                        roundAvatar
                        title={header.title}
                        subtitle={MaskService.toMask('money', header.value)}
                        subtitleStyle={{fontWeight: 'bold'}}
                        leftAvatar={{source: header.avatar}}
                        bottomDivider
                    />
                    {action === 'pay_the_bills' ? detail.map((d) => renderBarCode(d)) : null}
                    {action === 'cellular_recharge' ? detail.map((d) => renderCellularRecharge(d)) : null}
                </Card>
                <ContentPayment>
                    {payments_methods.map((p) => rendPayments(p))}
                    <ListItem
                        onPress={() => navigation.navigate('CreditCard')}
                        title={'Adicionar cartão'}
                        bottomDivider
                        leftIcon={{type: 'font-awesome-5', name: 'credit-card', size: 20}}
                        chevron
                    />
                </ContentPayment>
                <ContentButton>
                    <Button
                        buttonStyle={{width: 200, justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                        onPress={() => boletoGeneration()}
                        title="Finalizar"
                    />
                </ContentButton>
            </Content>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default RechargePay;
