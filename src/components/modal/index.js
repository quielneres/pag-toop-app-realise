import React, {useState, useEffect} from 'react';

import {View, StyleSheet, Text} from "react-native";
import {Button, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Modal = ({status, type,message,  msg_btn, action, actionClose}) => {

    const WorningBalence = () => (
        <Overlay isVisible={status} overlayStyle={{width: '70%', height: 'auto'}}>
            <View style={styles.content}>
                <Icon name={'exclamation-triangle'} size={30} color={'#D9B504'}/>
                <Text style={{
                    fontWeight: 'bold',
                    marginTop: 20,
                    textAlign: 'center'
                }}>{message}</Text>
            </View>
            <View style={{ margin: 15}}>
                <Button
                    onPress={action}
                    title={msg_btn}
                />
                <Button
                    type="clear"
                    onPress={actionClose}
                    title={'Agora não'}
                />
            </View>
        </Overlay>
    );

    return (
        <View>
            {type === 2 ? WorningBalence() : null}
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        margin: 20,

    },

});


export default Modal;
