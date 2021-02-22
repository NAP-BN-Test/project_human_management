import React, { Component, useEffect, useState } from 'react';
// import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../../redux/reducers/index.reducer';
import { Action } from '../../redux/actions/index.action';

import {
    StyleSheet,
    Text,

    TextInput,
    Button,
    TouchableHighlight,
    Image,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, User } from '../../redux/states/type';
import AsyncStorage from '@react-native-community/async-storage'
import Toast from 'react-native-simple-toast';

const Reload = () => {

    const dispatch = useDispatch()
    const userLogin: User = useSelector((state: RootState) => state.login.user)
    const alert: Alert = useSelector((state: RootState) => state.alerts)
    // luôn luôn chạy
    useEffect(() => {
        if (alert.type == 'error') {
            Toast.show(
                alert.message,
                3000
            )
        }
    })

    // Chỉ chạy 1 lần
    useEffect(() => {
        const autologin = async () => {
            userLogin.userName = await AsyncStorage.getItem('username') || ''
            userLogin.passWord = await AsyncStorage.getItem('password') || ''
            if (userLogin.userName !== null && userLogin.passWord !== null && userLogin.userName !== '' && userLogin.passWord !== '') {
                dispatch(Action.act_login(userLogin))
            }
        }
        autologin()
    }, [])
    return (
        <View>
            <TouchableHighlight>
                <Text></Text>
            </TouchableHighlight>
        </View>
    );
}

export default Reload;

