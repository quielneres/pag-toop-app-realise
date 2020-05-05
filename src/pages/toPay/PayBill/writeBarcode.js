import React, {useState, useEffect} from 'react';

import {View, Text} from "react-native";
import {Boleto} from "broleto";
import {Content, Container, Form} from 'native-base';
import {Button, Input} from 'react-native-elements';
import WorningModal from "../../../components/modal/worning";
import {validateAll} from 'indicative/validator';


const WriteBarcode = ({navigation}) => {

    const [worning, setWorning] = useState(false);
    const [barCodeData, setBarCodeData] = useState(
        {
            barCode: '',
            description: '',
            amount: '',
            error: {},
        }
    );

    useEffect(() => {
        setBarCodeData(
            {
                barCode: navigation.getParam('brCode') ?? '',
            }
        );
    }, []);

    const submitForPay = async () => {

        const rules = {
            barCode: 'required',
            description: 'required',
        };

        const messages = {
            required: (field) => `${field} é obrigatório`,
        };

        try {
            await validateAll(barCodeData, rules, messages);

            const result = new Boleto(barCodeData.barCode);
            if (result.valid()) {
                navigation.navigate('PaymentOptions', {payment_data: barCodeData, action: 'pay_the_bills'});
                return;
            }

            setWorning(true)

        } catch (err) {
            console.log(err)
            const formattedErrors = {};
            err.forEach(error => formattedErrors[error.field] = error.message);
            setBarCodeData({...barCodeData, error: formattedErrors})
        }
    };

    const submitWorning = () => {
        setWorning(false);
    };

    return (
        <Container>
            <WorningModal
                status={worning}
                menssage={'Codigo de barras invalido!'}
                action={() => submitWorning()}
                menssageBtn={'OK'}
            />
            <Content>
                <Form style={{marginTop: 15}}>
                    <Input
                        label={'Código de barras'}
                        placeholder='Digite o código de barras'
                        multiline={true}
                        textAlignVertical={"top"}
                        value={barCodeData.barCode}
                        onChangeText={value => setBarCodeData({...barCodeData, barCode: value})}
                        errorStyle={{color: 'red'}}
                        // errorMessage={barCodeData.error['barCode']}
                    />
                    <Input
                        label={'Descrição'}
                        placeholder='Ex: conta de luz, boleto bancário'
                        multiline={true}
                        textAlignVertical={"top"}
                        value={barCodeData.description}
                        onChangeText={value => setBarCodeData({...barCodeData, description: value})}
                        errorStyle={{color: 'red'}}
                        // errorMessage={barCodeData.error['description']}
                    />
                </Form>
                <View style={{alignItems: 'center'}}>
                    <Button
                        buttonStyle={{width: 200, justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                        onPress={() => submitForPay()}
                        disabled={new Boleto(barCodeData.barCode).valid() ? false : true}
                        title="Prosseguir"
                    />
                </View>
            </Content>
        </Container>
    )
};
export default WriteBarcode;
