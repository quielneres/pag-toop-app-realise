import React from 'react';

import {Text, StyleSheet, View, Alert, ActivityIndicator, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const SingUp = ({navigation, status, menssage, menssageBtn, action}) => {
    return (
        <View>
            <Modal isVisible={status}>
                <View style={styles.content}>
                    <Text style={styles.textTile}>Secesso!</Text>
                    <Text style={styles.msg}>{menssage}</Text>
                    <View style={styles.viewButton}>
                        <TouchableOpacity onPress={action}>
                            <Text>{menssageBtn}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        margin: 15,
        width: '90%',
        padding: 15,
    },
    textTile: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    msg: {
        margin: 0,
    },
    viewButton: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    form: {
        padding: 0,
        margin: 0,
        // backgroundColor: '#4CB1F7'

    },
    item: {
        padding: 0,
        margin: 0,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 15
    },
    label: {
        // color:  'white',
        width: '100%',
        fontWeight: 'bold'
    },
    input: {
        // backgroundColor: 'white',
        width: '100%',
        height: 45,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: 'gray'
    }
});


export default SingUp;
