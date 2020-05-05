import React from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';


export default class Perfil extends React.Component {


    render() {
        return (
            <View>
                <Text>Perfil</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    profileContainer: {

        padding: 0,
        zIndex: 1
    },
    profileBackground: {

        height: 0.6
    },

    info: {
        marginTop: 30,
        paddingHorizontal: 10,
        height: 0.8
    },
    avatarContainer: {
        position: 'relative',
        marginTop: -80
    },
    avatar: {


        borderRadius: 50,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',


    },
    social: {



        justifyContent: 'center',
        zIndex: 99,
        marginHorizontal: 5
    }
});
