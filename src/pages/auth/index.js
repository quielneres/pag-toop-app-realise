import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import Example from '../Example';

const AuthStack = createStackNavigator({
    Landing: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Landing',
        },
    },
    SignIn: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Sign In',
        },
    },
    CreateAccount: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Create Account',
        },
    },
    ForgotPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Forgot Password',
        },
    },
    ResetPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Reset Password',
        },
    },
})

export default AuthStack;
