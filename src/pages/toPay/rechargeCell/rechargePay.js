import React, {useEffect, useState} from 'react';

import {
    RechargePayHeader,
    RechargePayTitle,
    PayTextValue,
    RechargePayTitleInfo,
    ContentDetails,
    ContentInfo,
    TextIndice,
    TextValue,
    ContentButton,
    ContentPayment,
} from './styles';

import {
    Container, Left, Content,
    Right
} from 'native-base';


import {CheckBox} from 'react-native-elements'

import {View, Text, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from "../../../components/loader";
import api from "../../../services/api";

const ls = require('react-native-local-storage');
import Modal from "../../../components/modal";
import WorningModal from "../../../components/modal/worning";

import {Button, ListItem} from 'react-native-elements';


const RechargePay = ({navigation}) => {

    const [value, setValue] = useState(navigation.getParam('value'))
    const [cellNumber, setCellNumber] = useState(navigation.getParam('cellNumber'));
    const [operadora, setOperadora] = useState(navigation.getParam('operadora'));
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [link, setLink] = useState(null);
    const [modal, setModal] = useState(false);
    const [payment_method, setPayment] = useState(1);
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
        })

    }, []);

    const payments = [
        {
            id: 1,
            method: 'Boleto',
            select: false,
            icon: 'barcode'
        },
        {
            id: 2,
            method: 'Usar saldo (Meu saldo: 0,00)',
            select: true,
            icon: 'money-bill'
        },
        {
            id: 3,
            method: 'Cartao de creditos',
            select: false,
            icon: 'credit-card'
        },
    ];

    const rendPayments = payment => (
        <View>
            <CheckBox
                textStyle={{width: '100%'}}
                title={payment.method}
                checked={payment_method === payment.id ? true : false}
                onPress={() => setPayment(payment.id)}
            />
        </View>
    );

    const submit = async (pay_method) => {

        setLoading(true);
        const itens = {
            id_comprador: user.id_comprador,
            valor: value,
            preco: value,
            quantidade: 1,
            descricao: 'Recarga',
            detalhes: 'Recarga Celular',
            payment_method: pay_method,
            cell_number: cellNumber,
            operadora_name: operadora
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

    const submitMessage = () => {
        setModal(false);
        navigation.navigate('OrderDetail', {
            data: {
                method: 1,
                origin: 'recharge',
                link: link,
                title: 'Recaga celular',
                number: cellNumber,
                opera: operadora,
                value: value
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
                <RechargePayHeader>
                    <Icon name={'mobile-alt'} size={40} color={'#4CB1F7'}/>
                    <RechargePayTitleInfo>
                        <RechargePayTitle>
                            Racarga de Celular
                        </RechargePayTitle>
                        <PayTextValue>
                            R$ {value},00
                        </PayTextValue>
                    </RechargePayTitleInfo>
                </RechargePayHeader>
                <ContentDetails>
                    <ContentInfo>
                        <TextIndice>Número:</TextIndice>
                        <TextValue>{cellNumber}</TextValue>
                    </ContentInfo>
                    <ContentInfo>
                        <TextIndice>Operadora:</TextIndice>
                        <TextValue>{operadora}</TextValue>
                    </ContentInfo>
                </ContentDetails>
                <ContentPayment>
                    {payments.map((p) => rendPayments(p))}
                    <ListItem
                        onPress={() => navigation.navigate('CreditCard')}
                        title={'Adicionar cartão'}
                        bottomDivider
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
