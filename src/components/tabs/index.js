import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~/components/styles';

import {
    Container,
    Tab,
    TabText,
} from './styles';

import {NativeModules} from 'react-native'
const {RNZendesk} = NativeModules

RNZendesk.initialize({
    appId: '383a856caf582073cdb48f6ca0eb717418f8283c34b2cb0e',
    clientId: 'mobile_sdk_client_4b8ad1ccc32257a1de3a',
    zendeskUrl: 'https://producoesr2.zendesk.com',
})

RNZendesk.identifyAnonymous('Glauber', 'glauberkyves@gmail.com')

const Tabs = ({tab, navigation}) => {

    function setColor(active, item) {
        if (active === item) {
            return colors.primary;
        }

        return colors.light;
    }

    return (
        <Container>
            <Tab onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={25} color={setColor(tab, 1)}/>
                <TabText color={setColor(tab, 1)}>Início</TabText>
            </Tab>
            <Tab onPress={() => navigation.navigate('Tickets')}>
                <Icon name="ticket-confirmation" size={25} color={setColor(tab, 2)}/>
                <TabText color={setColor(tab, 2)}>Ingressos</TabText>
            </Tab>
            <Tab onPress={() => RNZendesk.showHelpCenter({
                hideContactSupport: false
            })}>
                <Icon name="help-circle-outline" size={25} color={setColor(tab, 4)}/>
                <TabText color={setColor(tab, 4)}>Ajuda</TabText>
            </Tab>
            <Tab onPress={() => navigation.navigate('Profile')}>
                <Icon name="account-outline" size={25} color={setColor(tab, 5)}/>
                <TabText color={setColor(tab, 5)}>Perfil</TabText>
            </Tab>
        </Container>
    )
};

export default Tabs;
