import React, {useEffect, useState} from 'react';

import {ActivityIndicator, View} from "react-native";

import {
    Container,
    Left,
    CardItem,
    Card,
    Content,
    Header,
    ListItem,
    Body,
    Text,
    Title,
    Button,
    Thumbnail
} from 'native-base';

import {
    ContentResponse,
    TitleResponse,
    HeaderResponse,
    ContenDatailsResponse,
    TextDetail,
    LinkBoleto,
    ContenResponseButton,
} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';
import SwipeablePanel from 'rn-swipeable-panel';
const ls = require('react-native-local-storage');
import Load from '../../components/loader';
import Modal from "../../components/modal";
import WorningModal from "../../components/modal/worning";

const Checkout = ({navigation}) => {

    const [data, setData] = useState(navigation.getParam('data'));
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

    const submit = async () => {

        setLoading(true);

        const itens = {
            id_comprador: user.id_comprador,
            valor: data.price,
            preco: data.price,
            quantidade: 1,
            descricao: data.title,
            detalhes: data.content,
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
                origin: 'products',
                link: link,
                title: data.title,
                description: data.content,
                value: data.price
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
            <Content>
                <Card style={{margin: 10, height: '100%'}}>
                    <CardItem
                        style={{justifyContent: 'center', alignItems: 'center', height: 150, flexDirection: 'column'}}>
                        <Thumbnail
                            style={{width: 150, height: 100}}
                            source={{uri: data.image_url}}/>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>
                            {data.title}
                        </Text>
                    </CardItem>
                    <CardItem style={{borderTopWidth: 0.3}}>
                        <Text>{data.content}</Text>
                    </CardItem>
                    <CardItem style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        borderTopWidth: 0.3
                    }}>
                        <Text>De: R$ {data.price}</Text>
                        <Text>Por: R$ {data.price - data.descount}</Text>
                    </CardItem>
                    <CardItem style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        borderTopWidth: 0.3
                    }}>

                    </CardItem>
                    <CardItem style={{marginTop: 20}}>

                        <Button style={{width: '100%', justifyContent: 'center', backgroundColor: '#4CB1F7'}}
                                onPress={() => boletoGeneration()}>
                            <Text>Gerar boleto</Text>
                        </Button>
                    </CardItem>
                </Card>
            </Content>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default Checkout;
