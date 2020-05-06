import React from 'react';

import {StyleSheet, Image, TouchableOpacity} from "react-native";
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
            center: false,
            color: action === 'home' ? colors.primary : colors.lighter11
        },
        {
            id: 2,
            title: 'Pagar',
            action: 'ToPay',
            icon_name: 'money-bill',
            center: false,
            color: action === 'toPay' ? colors.primary : colors.lighter11
        },
        {
            id: 3,
            title: 'Pagar',
            action: 'ToPay',
            icon_name: 'money-bill',
            center: true,
            color: action === 'toPay' ? colors.primary : colors.lighter11
        },
        {
            id: 4,
            title: 'Cobrar',
            action: 'ToDemand',
            icon_name: 'hand-holding-usd',
            center: false,
            color: action === 'toDemand' ? colors.primary : colors.lighter11
        },
        {
            id: 5,
            title: 'Perfil',
            action: 'Profile',
            icon_name: 'user-alt',
            center: false,
            color: action === 'profile' ? colors.primary : colors.lighter11
        }
    ];


    return (
        <Footer>

            <FooterTab style={styles.footerBar}>
                {
                    menu.map((m) => (
                        <Button vertical onPress={() => navigation.navigate(m.action)} key={m.id}>
                            {
                                m.center ?
                                    <TouchableOpacity>
                                        <Image
                                            style={{width: 50, height: 50, marginTop: -30}}
                                            source={require('../../assets/icons-home/maquina-icon.png')}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <Icon active name={m.icon_name} size={20} color={m.color}/>
                            }
                            {
                                m.center ?
                                    null
                                    :
                                    <Text style={{color: m.color}}>{m.title}</Text>
                            }
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
