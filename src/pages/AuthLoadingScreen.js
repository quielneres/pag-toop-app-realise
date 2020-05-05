import React, {useEffect} from 'react';

import {View} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Load from '../components/loader'

export default function AuthLoadingScreen(props) {
  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await AsyncStorage.getItem('@ListApp:userToken');

      props.navigation.navigate(userToken ? 'Home' : 'Auth');
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Load/>
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
