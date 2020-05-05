import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Styles from './Style';

export default class Valores extends Component {
  render() {
    return (
      <View style={Styles.containerValores}>
        <View style={Styles.boxValores}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>R$ 1,50</Text>
          <Text>Disponível</Text>
        </View>
        <View style={Styles.boxValores}>
          <Text  style={{fontWeight: 'bold', fontSize: 16}}>R$ 1,50</Text>
          <Text>À liberar</Text>
        </View>
        <View style={Styles.boxValores}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>R$ 1,50</Text>
          <Text>Saldo</Text>
        </View>
      </View>
    );
  }
}
