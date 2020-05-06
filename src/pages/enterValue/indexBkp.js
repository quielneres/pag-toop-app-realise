import React, {useEffect, useState} from 'react';


import {View, Text} from "react-native";

import {
    ContentNumbers,
    BlockNumber,
    Number,
    ContentValor,
    Value,
    TextNumber,
    ContentButton,
    ContentHeader,
    LabelHeader,
    ButtomClean,
} from './styles';

import {
    Container, Left, Right, Body, Button
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from "../../services/api";

import Load from '../../components/loader';
import {MaskService} from 'react-native-masked-text';
import Modal from "../../components/modal";
import WorningModal from "../../components/modal/worning";

const ls = require('react-native-local-storage');

const GerarBoleto = ({navigation}) => {

    const numbers = [
        {
            group: [
                {
                    data: [
                        {number: 1},
                        {number: 2},
                        {number: 3},
                    ]
                },
                {
                    data: [
                        {number: 4},
                        {number: 5},
                        {number: 6},
                    ]
                },
                {
                    data: [
                        {number: 7},
                        {number: 8},
                        {number: 9},
                    ]
                },
                {
                    data: [
                        {number: 0},
                    ]
                }
            ]
        }
    ];

    const [number, setNumber] = useState({
        numeral: []
    });
    const [value, setValue] = useState(0);
    const [date, setDate] = useState(null);
    const [swipeablePanelActive, setSwip] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status_server, setStatusServer] = useState(false);
    const [user, setUser] = useState([]);
    const [link, setLink] = useState(null);
    const [modal, setModal] = useState(false);
    const [modal_worning, setModalWorning] = useState(false);

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);

    const componentDidMount = () => {
        this.openPanel();
    };

    const openPanel = () => {
        setSwip(true);
    };

    const closePanel = () => {
        navigation.goBack(null)
        setSwip(false);
    };


    useEffect(() => {

        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        setDate(date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec);

    }, []);


    const addNumber = (n) => {
        number.numeral.push(n);
        setValue(number.numeral.join(''))
    };

    const cleanNumber = () => {
        {
            number.numeral.join('') >= 0 ?
                number.numeral.pop() : null
        }
        setValue(number.numeral.join(''))
    };

    const renderNumber = data => (
        <View>
            {data.group.map((g) => (
                <BlockNumber>
                    {g.data.map((n) => (
                        <Number onPress={() => addNumber(n.number)}>
                            <TextNumber>{n.number}</TextNumber>
                        </Number>
                    ))}
                </BlockNumber>
            ))}
        </View>
    );

    const submit = async () => {
        setLoading(true);

        const itens = {
            id_comprador: user.id_comprador,
            valor: value,
            preco: value,
            quantidade: 1,
            descricao: 'Boleto',
            detalhes: 'Boleto de cobrança',
            payment_method: 1,
            cell_number: '',
            operadora_name: ''

        };

        try {
            const response = await api.post('/new-request', itens);
            const data_server = response.data;


            {
                data_server.status === true ? setLink(data_server.link_boleto) : null
            }

            setLoading(false);
            setModal(true)
        } catch (err) {
            console.log(err)
            setLoading(false);
        }
    };


    const boletoGeneration = () => {
        {user.id_comprador ? submit() :  setModalWorning(true)}
    };


    const submitMessage = () => {
        setModal(false);
        navigation.navigate('OrderDetail', {
            data: {
                method: 1,
                origin: 'barcode',
                link: link,
                title: 'Cobrança',
                description: 'Cobraça por boleto',
                value: value
            }
        })
    };

    const submitWorning = () => {
        setModalWorning(false);
        navigation.navigate('EditProfile', {data_user: user})
    };

    return (
        <Container>
            <Modal
                status={modal}
                menssage={'Boleto gerado com sucesso!'}
                action={() => submitMessage()}
                menssageBtn={'OK'}
            />
            <WorningModal
                status={modal_worning}
                menssage={'Complete o cadastro para continuar!'}
                action={() => submitWorning()}
                menssageBtn={'OK'}
            />
            <ContentHeader>
                <LabelHeader>Digite um valor:</LabelHeader>
            </ContentHeader>
            <ContentValor>
                <Value>
                    {MaskService.toMask('money', value, {unit: 'R$ ', separator: ',', delimiter: '.'})}
                </Value>
                <ButtomClean onPress={() => cleanNumber()}>
                    <Icon name={'angle-left'} size={30}/>
                </ButtomClean>
            </ContentValor>
            <ContentNumbers>
                {numbers.map((data) => renderNumber(data))}
                <ContentButton>
                    <Button
                        style={{backgroundColor: '#4CB1F7', justifyContent: 'center'}}
                        onPress={() => boletoGeneration()}
                    >
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Gerar boleto</Text>
                    </Button>
                </ContentButton>
            </ContentNumbers>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default GerarBoleto;
