import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {
    ContantSaldo,
    TextSaldo,
    Link
} from './styles';
import {grey} from "color-name";
import {Container,Content} from 'native-base';
import FooterContent from "../../components/footer";


const Wallet = ({navigation}) => {

        return (
            <Container>
                <Content>
                    <ContantSaldo style={styles.saldo}>
                        <TextSaldo>R$ 150,00</TextSaldo>
                        <Text>Saldo</Text>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Link onPress={() => navigation.navigate('Saque')}>
                                <Text style={styles.links}>Saque</Text>
                            </Link>
                            <Link onPress={() => navigation.navigate('Transferir')}>
                                <Text style={styles.links}>Transferir</Text>
                            </Link>
                        </View>
                        <View>
                            <Link onPress={() => navigation.navigate('Saque')}>
                                <Text style={styles.links2}>Adicionar Dinheiro</Text>
                            </Link>
                        </View>
                    </ContantSaldo>
                </Content>
                <FooterContent navigation={navigation}/>
            </Container>
        );
};

const styles = StyleSheet.create({
    saldo: {
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        alignItems: 'center'

    },
    links: {
        textAlign: 'center',
        margin: 10,
        width: 120,
        padding: 5,
        borderWidth: 0.3,
        borderColor: 'grey',
        borderRadius: 4,
    },
    links2: {
        textAlign: 'center',
        width: 260,
        padding: 5,
        borderWidth: 0.3,
        borderColor: 'grey',
        borderRadius: 4,
        marginBottom: 10,
    }
});

export default Wallet;
