import React, {Component, useState} from 'react'
import {View, Text, StyleSheet, Share} from 'react-native'
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';
import Clipboard from "@react-native-community/clipboard";
import {Button} from "react-native-elements";
import {Content} from "native-base";


const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 5;
const options = [
    'Cancelar',
    'Copiar digitos',
    'Compartilhar link de pagamento'
];


class CustomExample extends Component {
    state = {
        selected: 1,
    };

    showActionSheet = () => this.actionSheet.show();

    getActionSheetRef = ref => (this.actionSheet = ref);

    handlePress = index => {

        console.log(index);
        console.log( Clipboard.getString());

        { index === 1 ? Clipboard.getString() : null}

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

        return (
            <View>
                <Text style={{marginBottom: 20}}>
                    I like {selectedText}
                </Text>


                <View style={{alignItems: 'center'}}>
                    <Button
                        buttonStyle={{width: 300, justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                        onPress={this.showActionSheet}
                        title="Opçoes do boleto"
                    />
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
        )
    }
}

export default CustomExample;
