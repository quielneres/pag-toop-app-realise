import React, {Component, useState} from 'react'
import {View, Text, StyleSheet, Share} from 'react-native'
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';
import Clipboard from "@react-native-community/clipboard";
import {Button, Header} from "react-native-elements";
import {Content, Container} from "native-base";

import {log} from "react-native-reanimated";
import colors from "../../../components/styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaskService from "react-native-masked-text/lib/mask-service";

const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 5;
const options = [
    'Cancelar',
    'Copiar Dígitos',
    'Compartilhar link de pagamento'
];


class CustomExample extends Component {
    state = {
        selected: 1,
        data_transaction: this.props.navigation.getParam('data'),
        data_response: this.props.navigation.getParam('data_response'),
    };

    showActionSheet = () => this.actionSheet.show();
    getActionSheetRef = ref => (this.actionSheet = ref);
    handlePress = index => {

        console.log(index);
        console.log(Clipboard.getString());

        {
            index === 1 ? Clipboard.getString() : null
        }

        {
            index === 2 ?
                Share.share(
                    {
                        title: "a title",
                        // message: "some message",
                        // or
                        url: 'https://reactnativeexample.com/tag/share/'
                    },
                    (options)
                ) : null
        }

        this.setState({selected: index})
    };


    render() {
        const {selected} = this.state;
        const selectedText = options[selected].component || options[selected];
        const data_transaction = this.state.data_transaction;
        const data_response = this.state.data_response;

        // console.log(data_transaction)

        return (
            <Container>
                <Header
                    containerStyle={{backgroundColor: colors.primary}}
                    leftComponent={<Icon name={'chevron-left'} color={'#fff'} size={25}
                                         onPress={() => this.props.navigation.goBack(null)}/>}
                    centerComponent={{
                        text: data_transaction.title,
                        style: {fontSize: 16, color: '#fff', fontWeight: 'bold'}
                    }}
                />
                <Content>
                    <View>
                        <View style={styles.blocks}>
                            <Text style={styles.barcode}>{data_response.barCode}</Text>
                            <Text style={styles.text_copy}>Copiar Dígitos</Text>
                        </View>
                        <View style={styles.blocks}>
                            <View style={{flexDirection: 'row'}}>
                                <Text>Valor: </Text>
                                <Text
                                    style={{fontWeight: 'bold'}}>{MaskService.toMask('money', data_transaction.value)}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text>Vencimento: </Text>
                                <Text style={{fontWeight: 'bold'}}>13/05/2020</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{margin: 15}}>
                                <Text style={{textAlign: 'center'}}>Uma link de pagamento foi enviado para o
                                    email {data_response.email}</Text>
                            </View>
                            <Button
                                buttonStyle={{
                                    width: 300,
                                    justifyContent: 'center',
                                    backgroundColor: '#4CB1F7',
                                    marginTop: 20
                                }}
                                onPress={this.showActionSheet}
                                title="Opçoes do boleto"
                            />

                            <Text style={{textAlign: 'center', color: 'red', marginTop: 10, fontWeight: 'bold'}}>Cancelar</Text>
                        </View>
                        <ActionSheet
                            ref={this.getActionSheetRef}
                            // title={title}
                            // message="custom message custom message custom message custom message custom message custom message "
                            options={options}
                            cancelButtonIndex={CANCEL_INDEX}
                            destructiveButtonIndex={DESTRUCTIVE_INDEX}
                            onPress={this.handlePress}
                        />
                    </View>
                </Content>
            </Container>
        )
    }
};

const styles = StyleSheet.create({
    blocks: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 0.3,
        borderColor: colors.lighter
    },
    barcode: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    text_copy: {
        color: 'green',
        marginTop: 10,
    }
});

export default CustomExample;
