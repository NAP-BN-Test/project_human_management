/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-community/async-storage';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
// import { Icon } from 'react-native-elements'
import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import {useDispatch} from 'react-redux';
import stylesLogin from '../Login/styleLogin';
import styles from './styleHome';

const DrawerContent = (props: any) => {
  const dispatch = useDispatch();
  const [staffName, setStaffName] = useState('');
  const [staffCode, setStaffCode] = useState('');
  useEffect(() => {
    const getInfo = async () => {
      const name = (await AsyncStorage.getItem('staffName')) || '';
      setStaffName(name);
      var code = (await AsyncStorage.getItem('staffCode')) || '';
      setStaffCode(code);
    };
    getInfo();
  }, []);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                alignItems: 'center',
                // flex: 1,
              }}>
              <Image
                source={{
                  uri:
                    'https://ageless.com.vn/wp-content/uploads/2016/07/AGELESS-logo-TIENG-VIET-e1468290499166.png',
                }}
                style={{
                  width: 150,
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 15,
                flexDirection: 'column',
              }}>
              <Title style={styles.title}>{staffName}</Title>
              <Caption style={styles.caption}>{staffCode}</Caption>
            </View>
          </View>
          <View style={styles.drawerSection}>
            <Drawer.Section>
              <DrawerItem
                icon={({color, size}) => (
                  <Image
                    style={stylesLogin.inputIcon}
                    source={require('../../asset/img/padlock.png')}
                  />
                )}
                label="Yêu cầu mua sắm"
                onPress={() => {
                  props.navigation.navigate('ShoppingRequest');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Image
                    style={stylesLogin.inputIcon}
                    source={require('../../asset/img/online-order.png')}
                  />
                )}
                label="Đề nghị thanh toán"
                onPress={() => {
                  props.navigation.navigate('Payment');
                }}
              />
            </Drawer.Section>
          </View>
          <DrawerItem
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }}
            icon={({color, size}) => (
              <Image
                style={stylesLogin.inputIcon}
                source={require('../../asset/img/exit.png')}
              />
            )}
            label="Logout"
            onPress={() => {
              AsyncStorage.clear();
              Actions.Login();
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
