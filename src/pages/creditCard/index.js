import React, {useState, useEffect} from 'react';

import {ScrollView, TouchableOpacity, Text, View} from 'react-native';
import {Container, Button, Content, Card, CardItem, Footer, List, ListItem, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import api from "../../services/api";
import Load from '../../components/loader';
import SwipeablePanel from 'rn-swipeable-panel';
import Modal from "../../components/modal";

const ls = require('react-native-local-storage');

const Cards = ({navigation}) => {
    const [cards, setCards] = useState([]);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [swipeablePanelActive, setSwip] = useState(false);
    const [detailCard, setDetailCard] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setLoading(true);
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? []);
            api.get('list-credit-card/' + data.user.id)
                .then((res) => {
                    setCards(res.data.data)
                })
        });

        {user.id_comprador === null ? navigation.navigate('EditProfile', {data_user: user}) : null }


        setLoading(false);
    }, []);

    const componentDidMount = () => {
        this.openPanel();
    };

    const openPanel = () => {
        setSwip(true);
    };

    const closePanel = () => {
        setSwip(false);
    };
    const openOpetion = (card) => {
        setDetailCard(card)
        setSwip(true);
    }

    const renderCard = (card) => (
        <ListItem key={card.id_card}>
            <TouchableOpacity onPress={() => openOpetion(card)}
                              style={{width: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
                <Left style={{alignItems: 'center'}}>
                    {card.flag === 'VISA' ? <Icon name="cc-visa" size={16} style={{marginRight: 10}}/> : null}
                    {card.flag === 'MASTERCARD' ?
                        <Icon name="cc-mastercard" size={16} style={{marginRight: 10}}/> : null}
                    <Text>{card.dig_start} **** **** {card.dig_end}</Text>
                </Left>
                <Right style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    {card.status === 1 ? <Icon name="check" color={'green'} style={{marginRight: 20}}/> : null}
                    <Icon name="ellipsis-h"/>
                </Right>
            </TouchableOpacity>
        </ListItem>

    );

    const cardDefalt = async (id_card, status) => {

        try {
            setSwip(false)
            setLoading(true);

            const response = await api.post('/credit-card-default/' + user.id, {
                id: id_card,
                status: status
            });
            const data_server = response.data;

            setLoading(false);
            setModal(true);
        } catch (err) {

            console.log(err)

            // const formattedErrors = {};
            // err.forEach(error => formattedErrors[error.field] = error.message);
            // setForm({...form, error: formattedErrors})
            // setLoading(false);
        }

    };

    const Swipeable = () => (
        <SwipeablePanel
            fullWidth
            isActive={swipeablePanelActive}
            onClose={closePanel}
            onPressCloseButton={closePanel}
        >
            <View>
                <View style={{backgroundColor: '#00257A', margin: 30, padding: 20, borderRadius: 10}}>
                    <Text style={{color: '#fff', fontSize: 25}}>{detailCard.dig_start} ****
                        **** {detailCard.dig_end}</Text>


                    {detailCard.flag === 'VISA' ?
                        <Icon name="cc-visa" size={36} color={'#fff'} style={{marginTop: 30}}/> : null}
                    {detailCard.flag === 'MASTERCARD' ?
                        <Icon name="cc-mastercard" size={36} color={'#fff'} style={{marginTop: 30}}/> : null}

                    <View style={{flexDirection: 'row', marginTop: 30}}>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text>exp:</Text>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}> 10/22</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end', marginLeft: 20}}>
                            <Text>cvc:</Text>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}> 123</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                    marginTop: 40
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 50,
                    }} onPress={() => cardDefalt(detailCard.id, detailCard.status)}>
                        {detailCard.status === 1 ?
                            <Icon name={'check'} size={30} color={'#03A696'}/> :
                            <Icon name={'check'} size={30} color={'gray'}/>
                        }
                        <Text>Tornar padrao</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 50,
                    }}
                                      onPress={() => deleteCard(detailCard.id)}>
                        <Icon name={'trash'} size={30} color={'#F20732'}/>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SwipeablePanel>
    );
    const submitMessage = () => {
        setModal(false)
        navigation.navigate('Perfil')
    };

    const deleteCard = async (id_card) => {

        try {
            setSwip(false);
            setLoading(true);

            const response = await api.get('/credit-card-delete/' + id_card);

            setLoading(false);
            setModal(true);
        } catch (err) {

            console.log(err);
        }
    }

    return (
        <Container>
            <Modal
                status={modal}
                menssage={'Operaçao realizada com sucesso!'}
                action={() => submitMessage()}
                menssageBtn={'OK'}
            />
            <Content>
                {cards.length > 0 ?
                    <ScrollView>
                        <List>
                            {cards.map((c) => renderCard(c))}
                        </List>
                    </ScrollView>
                    :
                    <View style={{
                        margin: 15,
                        borderRadius: 7,
                        backgroundColor: '#D9D9D9',
                        padding: 50,
                        alignItems: 'center',
                        height: '80%'
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Você não possui cartões cadastrados</Text>
                    </View>
                }
            </Content>
            <Footer style={{height: 100}}>
                <CardItem>
                    <Button block style={{width: '100%', height: 50, borderRadius: 7, backgroundColor: '#4CB1F7'}}
                            onPress={() => navigation.navigate('CreditCardAdd')}>
                        <Text style={{color: '#fff'}}>Adicionar Cartao</Text>
                    </Button>
                </CardItem>
            </Footer>
            <Swipeable/>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default Cards;


