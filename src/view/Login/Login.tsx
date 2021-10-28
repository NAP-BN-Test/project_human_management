/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component, useEffect, useState} from 'react';
// import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import {Action} from '../../redux/actions/index.action';

import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import stylesLogin from './styleLogin';
import {Alert, User} from '../../redux/states/type';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

const Login = () => {
  const dispatch = useDispatch();
  const userLogin: User = useSelector((state: RootState) => state.login.user);
  const alert: Alert = useSelector((state: RootState) => state.alerts);
  // luôn luôn chạy
  useEffect(() => {
    if (alert.type == 'error') {
      Toast.show(alert.message, 3000);
    }
  });

  // Chỉ chạy 1 lần
  useEffect(() => {
    const autologin = async () => {
      userLogin.userName = (await AsyncStorage.getItem('username')) || '';
      userLogin.passWord = (await AsyncStorage.getItem('password')) || '';
      if (
        userLogin.userName !== null &&
        userLogin.passWord !== null &&
        userLogin.userName !== '' &&
        userLogin.passWord !== ''
      ) {
        dispatch(Action.act_login(userLogin));
      }
    };
    autologin();
  }, []);

  // nếu value thay đổi thì sẽ gọi lại use effect
  // useEffect(() => {
  //     const autologin = async () => {
  //         console.log(2);

  //         // userLogin.userName = await AsyncStorage.getItem('username') || null
  //         // userLogin.passWord = await AsyncStorage.getItem('password') || null
  //         // infoServer.ip = await AsyncStorage.getItem('ip') || null
  //         // infoServer.dbName = await AsyncStorage.getItem('dbName') || null
  //         // if (userLogin.userName !== null && userLogin.passWord !== null && infoServer.ip !== null && infoServer.dbName !== null) {
  //         //     dispatch(Action.act_login(userLogin, infoServer))
  //         // }
  //     }
  //     autologin()
  // }, [value])

  const [value, setValue] = useState(false);
  // value ban đầu bằng false
  const click = async () => {
    if (value) {
      setValue(false);
    } else {
      setValue(true);
    }
  };
  // set lại giá trị

  const login = async () => {
    await AsyncStorage.setItem('password', userLogin.passWord);
    await AsyncStorage.setItem('username', userLogin.userName);
    if (userLogin.userName !== null && userLogin.passWord !== null) {
      dispatch(Action.act_login(userLogin));
    }
  };
  return (
    <View style={stylesLogin.container}>
      <Image
        style={stylesLogin.imgbox}
        source={require('../../asset/img/logo.png')}
      />
      <View style={stylesLogin.inputContainer}>
        <Image
          style={stylesLogin.inputIcon}
          source={require('../../asset/img/email.png')}
        />
        <TextInput
          style={stylesLogin.inputs}
          placeholder="Email"
          onChangeText={(email) => (userLogin.userName = email)}
          keyboardType="email-address"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={stylesLogin.inputContainer}>
        <Image
          style={stylesLogin.inputIcon}
          source={require('../../asset/img/padlock.png')}
        />
        <TextInput
          style={stylesLogin.inputs}
          placeholder="Password"
          onChangeText={(pass) => (userLogin.passWord = pass)}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableHighlight
        style={[stylesLogin.buttonContainer, stylesLogin.loginButton]}
        onPress={login}>
        <Text style={stylesLogin.loginText}>Login</Text>
      </TouchableHighlight>

      {/* <TouchableHighlight style={stylesLogin.buttonContainer}>
        <Text>Forgot your password?</Text>
      </TouchableHighlight>

      <TouchableHighlight style={stylesLogin.buttonContainer}>
        <Text>Register</Text>
      </TouchableHighlight> */}
    </View>
  );
};

export default Login;
