import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Alert, TouchableOpacity} from "react-native";
import {Container, Content, Right, Body, Footer, ActionSheet, Button} from "native-base";
import {Card, Header, Badge, Text} from 'react-native-elements'
import colors from "../../../components/styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaskService from "react-native-masked-text/lib/mask-service";


const Response = ({navigation}) => {
    var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;

    const [data_trasaction] = useState(navigation.getParam('data'));
    const [data_response] = useState(navigation.getParam('data_response'));
    const [option_btn, setOptionBtn] = useState({
        clicked: null
    });




    return (
        <Container>
            <Header
                containerStyle={{backgroundColor: colors.primary}}
                leftComponent={<Icon name={'chevron-left'} color={'#fff'} size={25} onPress={() => navigation.goBack(null)}/>}
                centerComponent={{ text: data_trasaction.title, style: {fontSize: 16, color: '#fff', fontWeight: 'bold' }}}
            />
            <View style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{data_response.barCode}</Text>
            </View>
            <View style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Valor: {MaskService.toMask('money', data_trasaction.value)}</Text>
                <Text>Vanecimento: {data_response.expire}</Text>
            </View>
            <View style={{padding: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Uma copia desse boleto foi enviado par o email quielneres@gmail.com</Text>
                <Button
                    onPress={() =>
                        ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                title: "Testing ActionSheet"
                            },
                            buttonIndex => {
                                setOptionBtn({ clicked: BUTTONS[buttonIndex] });
                            }
                        )}
                >
                    <Text>Opçoes do boleto</Text>
                </Button>
            </View>
        </Container>
    );
};

export default Response;
