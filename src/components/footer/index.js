import React from 'react';

import {StyleSheet} from "react-native";
import {Footer, Button, FooterTab, Text} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from "../styles/colors";


const FooterContent = ({navigation, action}) => {

    const menu = [
        {
            id: 1,
            title: 'Home',
            action: 'Home',
            icon_name: 'home',
            color: action === 'home' ? colors.primary : colors.lighter11
        },
        {
            id:2,
            title: 'Pagar',
            action: 'ToPay',
            icon_name: 'money-bill',
            color: action === 'toPay' ? colors.primary : colors.lighter11
        },
        {
            id:3,
            title: 'Cobrar',
            action: 'ToDemand',
            icon_name: 'hand-holding-usd',
            color: action === 'toDemand' ? colors.primary : colors.lighter11
        },
        {
            id: 4,
            title: 'Perfil',
            action: 'Profile',
            icon_name: 'user-alt',
            color: action === 'profile' ? colors.primary : colors.lighter11
        }
    ];


    return (
        <Footer>
            <FooterTab style={styles.footerBar}>
                {
                    menu.map((m) => (
                        <Button vertical onPress={() => navigation.navigate(m.action)} key={m.id}>
                            <Icon active name={m.icon_name} size={20} color={m.color}/>
                            <Text style={{color: m.color}}>{m.title}</Text>
                        </Button>
                    ))
                }
            </FooterTab>
        </Footer>
    );
};

const styles = StyleSheet.create({
    footerBar: {
        backgroundColor: colors.lighter9,
    },
    icon_ativo: {
        color: colors.primary
    }

});

export default FooterContent;
