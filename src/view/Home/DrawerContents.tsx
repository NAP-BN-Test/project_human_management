import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-elements'
import { Button, IconButton, Colors, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from '../../redux/actions/index.action';
import { RootState } from '../../redux/reducers/index.reducer';
import { User } from '../../redux/states/type';
import stylesLogin from '../Login/styleLogin';
import styles from './styleHome';

const DrawerContent = (props: any) => {
    const dispatch = useDispatch()
    const [staffName, setStaffName] = useState("")
    const [staffCode, setStaffCode] = useState("")
    useEffect(() => {
        const getInfo = async () => {
            const name = await AsyncStorage.getItem('staffName') || ''
            setStaffName(name)
            var code = await AsyncStorage.getItem('staffCode') || ''
            setStaffCode(code)
        }
        getInfo()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image size={70} source={{ uri: 'http://118.27.192.106:1357/ageless_sendmail/photo-1610588160000474779.jpg' }} />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{staffName}</Title>
                                <Caption style={styles.caption}>{staffCode}</Caption>
                            </View>

                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Thông báo</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Chuyên cần</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image style={stylesLogin.inputIcon} source={require('../../asset/img/padlock.png')} />
                            )}
                            label="Yêu cầu mua sắm"
                            onPress={() => {
                                props.navigation.navigate('ShoppingRequest')
                                console.log(911);
                                // Actions.Requests()
                            }}

                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image style={stylesLogin.inputIcon} source={require('../../asset/img/online-order.png')} />
                            )}
                            label="Đề nghị thanh toán"
                            onPress={() => {
                                props.navigation.navigate('Payment')
                                console.log(910);

                            }}
                        />
                        <DrawerItem
                            style={{ marginTop: 300, borderTopWidth: 1, borderBottomWidth: 1 }}
                            icon={({ color, size }) => (
                                <Image style={stylesLogin.inputIcon} source={require('../../asset/img/exit.png')} />
                            )}
                            label="Logout"
                            onPress={() => {
                                AsyncStorage.clear()
                                Actions.Login()
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;
