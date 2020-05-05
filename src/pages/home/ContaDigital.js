import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import Styles from './Style';

export default class ContaDigital extends Component {
    render() {
        return (
            <View style={Styles.containerCD}>
                {/*<Text style={Styles.tituloContainers}>Conta Digital</Text>*/}
                <View style={Styles.iconsCD}>
                    <Text style={Styles.itensMenuCD}>
                        <Image
                            style={{width: 15, height: 15}}
                            source={require('../../assets/icons-menu/pay.png')}
                        />
                        <Text> Cobrar</Text>
                    </Text>
                    <Text style={Styles.itensMenuCD}>
                        <Image
                            style={{width: 15, height: 15}}
                            source={require('../../assets/icons-menu/transfer.png')}
                        />
                        <Text> Transf.</Text>
                    </Text>
                    <Text style={Styles.itensMenuCD}>
                        <Image
                            style={{width: 15, height: 15}}
                            source={require('../../assets/icons-menu/extaxt.png')}
                        />
                        <Text> Ext</Text>
                    </Text>
                </View>
            </View>
        );
    }
}
