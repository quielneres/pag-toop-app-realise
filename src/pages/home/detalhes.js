import React from 'react';
import {View, Text, ActivityIndicator, FlatList, StyleSheet, SafeAreaView, Image} from 'react-native';


import Styles from './Style';
import api from '../../services/api';

function Item({title}) {
    return (
        <View style={styles.containerItem}>
            <View style={{marginBottom: 10}}>
                <Text style={styles.tituloItens}>Valor total</Text>
                <Text style={styles.item}>R$ 50</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styles.tituloItens2}>Valor total</Text>
                <Text style={styles.item2}>R$ 50</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styles.tituloItens2}>Parcela(s)</Text>
                <Text style={styles.item2}>1x de R$ 50</Text>
            </View>
            <View style={{marginBottom: 10, flexDirection: 'row',}}>
                <View style={{paddingRight:50}}>
                    <Text style={styles.tituloItens2}>Valor Taxa</Text>
                    <Text style={styles.item2}>R$ 50</Text>
                </View>
                <View>
                    <Text style={styles.tituloItens2}>Valor Liquido</Text>
                    <Text style={styles.item2}>R$ 50</Text>
                </View>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styles.tituloItens2}>Forma de Pagamento</Text>
                <Text style={styles.item2}>Credito - MASTERCARD</Text>
            </View>
            <View style={{marginBottom: 10, flexDirection: 'row',}}>
                <View style={{paddingRight:50}}>
                    <Text style={styles.tituloItens2}>Numero cartao</Text>
                    <Text style={styles.item2}>**** **** **** 2431</Text>
                </View>
                <View>
                    <Text style={styles.tituloItens2}>Hora da transaçao</Text>
                    <Text style={styles.item2}>18/03/20 17:32</Text>
                </View>
            </View>
            {/*<Text style={styles.title}>{title}</Text>*/}
        </View>
    );
}

class Detalhes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true, id: this.props.navigation.getParam('id_pedido')};

    }

    componentDidMount() {
        const id_pedido = this.state.id;

        api.get('/pedido-detalhe/' + id_pedido)
            .then(res => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: res.data.items,
                    },
                );
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
                <SafeAreaView style={styles.container}>
                    <View style={styles.containerImage}>
                        <Image
                            style={{width: 40, height: 40}}
                            source={require('../../assets/icons-detalhes/iconfinder_Tick_Mark_1398911.png')}/>
                        <Text style={styles.textoStatus}>Pagamento aprovado</Text>
                    </View>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) =>
                            <Item title={item.detail}/>
                        }
                        // keyExtractor={item => item.detail}
                    />
                </SafeAreaView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerItem: {
        // backgroundColor: '#F0FFFF',
        backgroundColor: '#DCDCDC',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    item: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    tituloItens: {
        fontSize: 16,
        color: 'grey',
    },
    item2: {
        fontWeight: 'bold',
    },
    tituloItens2: {
        color: 'grey',
    },
    containerImage: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoStatus: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },

});


export default Detalhes;


