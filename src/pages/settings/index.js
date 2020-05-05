import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import Example from '../Example';

const SettingsStack = createStackNavigator({
    SettingsList: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Settings List',
        },
    },
    Profile: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Profile',
        },
    },
});

export default SettingsStack;
