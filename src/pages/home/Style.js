'use strict';

import {StyleSheet} from 'react-native';

var Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerHeader: {
    backgroundColor:'#05BF7D',
    width: 350,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  containerValores: {
    marginTop: 10,
    width: 350,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#CBCED3',
    padding: 5,
  },
  boxValores: {
    paddingLeft: 20,
    paddingRight: 30,
    alignItems: 'center',
    textAlign: 'center'
  },
  containerCD: {
    width: 350,
    borderBottomWidth: 0.5,
    borderColor: '#CBCED3',
    paddingBottom: 10,
  },
  iconsCD: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tituloContainers: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 10,
  },
  itensMenuCD: {
    width: 110,
    textAlign: 'center',
    padding: 5,

  },
  icons: {
    width: 20,
    height: 20,
  },
  containerUltimasVendas: {
    marginTop: 10,
    width: 350,
  },
  containerLista: {
    width: 350,
    backgroundColor: '#DFE2E7',
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 0,
    flexDirection: 'row',
  },
  boxLista1: {
    width: 200,
  },
  boxLista2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  aprovado: {
    backgroundColor: '#05BF7D',
    padding: 5,
    color: '#fff',
    borderRadius: 5,
  },
  falhou: {
    backgroundColor: '#FD6854',
    padding: 5,
    color: '#fff',
    borderRadius: 5,
  },
});
export default Style;
