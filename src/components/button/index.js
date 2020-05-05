import React from 'react';

import {
    Button as ButtonComponent, Action
} from './styles';

import {fonts, colors, metrics} from '../../components/styles';
import {View} from 'react-native'

const Button = ({text, type, action, icon}) => {
    switch (true) {
        case type == 'lucent':
            return (
                <Action onPress={action}>
                    <ButtonComponent
                        style={{color: colors.white, backgroundColor: colors.lucent}}>
                        {text}
                    </ButtonComponent>
                </Action>
            )
            break;

        case type == 'regular':
            return (
                <Action onPress={action}>
                    <View style={{
                        color: colors.primary,
                        backgroundColor: colors.white,
                        borderColor: colors.primary,
                        borderWidth: 1,
                        flexDirection: 'row',
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}>
                        <View style={{marginTop: 7, marginRight: 5}}>
                            {icon}
                        </View>
                        <ButtonComponent style={{backgroundColor: colors.white, color: colors.primary}}>
                            {text}
                        </ButtonComponent>
                    </View>
                </Action>
            )
            break;

        default:
            return (
                <Action onPress={action}>
                    <ButtonComponent>
                        {text}
                    </ButtonComponent>
                </Action>
            )
    }

};

export default Button;
