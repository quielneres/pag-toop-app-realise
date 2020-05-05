import React, {useEffect, useState} from 'react';

import {} from './styles';


import {
    Container, Left, Button, Content, CheckBox, CardItem, Body,
    List, ListItem, Right, Form, Item, Picker
} from 'native-base';

import {View, Text, Linking} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from "../../../components/loader";
import api from "../../../services/api";
import SwipeablePanel from 'rn-swipeable-panel';

const ls = require('react-native-local-storage');
import Modal from "../../../components/modal";

const OrderDetail = ({navigation}) => {

    // const [data] =  navigation.state.params;
    const [data, setData] = useState(navigation.getParam('data'))
    const [cellNumber, setCellNumber] = useState(navigation.getParam('cellNumber'));
    const [operadora, setOperadora] = useState(navigation.getParam('operadora'));
    const [modalVisible, setModalVisible] = useState(true);
    const [swipeablePanelActive, setSwip] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status_server, setStatusServer] = useState(false);
    const [user, setUser] = useState([]);
    const [link, setLink] = useState(null);
    const [modal, setModal] = useState(false);

    console.log(data);

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);


    return (
        <Container>
            <View style={{backgroundColor: '#F2F2F2', margin: 20}}>
                <View style={{alignItems: 'center', padding: 40}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.title}</Text>
                </View>
                <View style={{padding: 15}}>
                    {
                        data.origin === 'recharge' ?
                            <View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{}}>Numero:</Text>
                                    <Text style={{}}>{data.number}</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{}}>Operadora:</Text>
                                    <Text style={{}}>{data.opera}</Text>
                                </View>
                            </View> : null
                    }
                    {
                        data.origin === 'products' || data.origin === 'barcode' ?
                            <View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{}}>{data.description}</Text>
                                </View>

                            </View> : null
                    }

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{}}>Valor:</Text>
                        <Text style={{}}>{data.value}</Text>
                    </View>
                    < View style={{alignItems: 'center', borderTopWidth: 0.3, marginTop: 30, paddingTop: 10}}>
                        <Text style={{}}>Acesse o link de pagemento</Text>
                        <Text style={{color: 'blue', fontSize: 18}}
                              onPress={() => Linking.openURL(data.link)}
                        >{data.link}</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 30, paddingTop: 10}}>
                <Text style={{}}>Estatus</Text>
                <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>Pendente</Text>
            </View>
        </Container>
    );
};

export default OrderDetail;
