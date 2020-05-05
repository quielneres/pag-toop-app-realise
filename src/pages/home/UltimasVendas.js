import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity, ActivityIndicator,
} from 'react-native';

import Styles from './Style';
import api from '../../services/api';

function Item({cadastro, valor, cliente, tipo_pagamento, status}) {
    return (
        <View style={Styles.containerLista}>
            <View style={Styles.boxLista1}>
                <Text style={styles.title}>{cadastro}</Text>
                <Text style={styles.title}>R$ {valor}</Text>
                <Text style={styles.title}>{cliente}</Text>
                <Text style={styles.title}>{tipo_pagamento}</Text>
            </View>
            {/*<View style={Styles.boxLista2}>*/}
            {/*{status === true ? (*/}
            {/*<Text style={Styles.aprovado}>Aprovado</Text>*/}
            {/*) : (*/}
            {/*<Text style={Styles.falhou}>Falhou</Text>*/}
            {/*)}*/}
            {/*</View>*/}
        </View>
    );
}

export default class UltimasVendas extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount() {
        api.get('/ver-pedido-all')
            .then(res => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: res.data.pedido,
                    },
                    function () {
                    },
                );
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            );
        } else {
            return (
                <ScrollView>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Details', {id_pedido: item.id_pedido})}
                            >
                                <Item
                                    cadastro={item.cadastro}
                                    valor={item.total}
                                    cliente={item.nome_comprador}
                                    tipo_pagamento={item.email}
                                    status={1}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
    },
});
