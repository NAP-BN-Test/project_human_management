import React, { Component, useEffect, useState } from 'react';
import { Appbar } from 'react-native-paper';
import { View, Text, Image } from 'react-native'
import { Avatar, Card, IconButton, Title, Paragraph } from 'react-native-paper';
import stylesPayment from '../../view/Payment/stylePayment';
import Menu from '../../component/MenuItem/Menu';
import { useNavigation } from '@react-navigation/native';
import styles from '../../asset/css/styles';
import { ScrollView } from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';

const PaymentComponent = () => {
    useEffect(() => {
        console.log(1);
    }, [])

    const navigation = useNavigation();
    const _goBack = () => {
        navigation.goBack()
    };

    const _handleSearch = () => console.log('Searching');
    // Buttons
    var swipeoutBtns = [
        {
            text: 'Phê duyệt',
            backgroundColor: '#0097A7',
            // underlayColor: '#000000',

            onPress: () => {
                _handleSearch
            },
            autoClose: true,
            // color: '#000000'
        },
        {
            text: 'Từ chối',
            backgroundColor: '#FBC02D',
            // underlayColor: '#000000',

            onPress: () => { _handleSearch },
            autoClose: true,
            color: '#000000'
        }
    ]
    const _handleMore = () => console.log('Shown more');
    return (
        <View>
            <View>
                <Appbar.Header style={styles.headerStyle}>
                    <Appbar.Action icon={require('../../asset/img/left-arrow.png')} onPress={_goBack} />
                    <Appbar.Content title="Đề nghị thanh toán" />
                    <Appbar.Action icon={require('../../asset/img/search.png')} onPress={_handleSearch} />
                    <Appbar.Action icon={require('../../asset/img/more.png')} onPress={_handleMore} />
                </Appbar.Header>
            </View>
            <ScrollView>

                <View style={{ marginBottom: 20, borderTopWidth: 1, marginTop: 10 }}>
                    <Swipeout right={swipeoutBtns}>
                        <View style={stylesPayment.elementView}>
                            <View>
                                <Image style={stylesPayment.inputIcon} source={require('../../asset/img/payment.png')} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Bộ phận đề nghị:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Bộ phận Bắc Ninh</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Nhân viên đề nghị:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Nguyễn Nhật Tùng</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Ngày đề xuất:</Text>
                                    <Text style={{ marginLeft: 5 }}>19/01/2021</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 35 }}>Số lượng:</Text>
                                    <Text style={{ marginLeft: 5 }}>10</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Trạng thái:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Đang phê duyệt</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TÊN TS/TB/LK:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>MTSS</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Lý do:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Thảo test thử dự án app</Text>
                                </View>
                            </View>
                        </View>
                    </Swipeout>
                    <Swipeout right={swipeoutBtns}>
                        <View style={stylesPayment.elementView}>
                            <View>
                                <Image style={stylesPayment.inputIcon} source={require('../../asset/img/payment.png')} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Bộ phận đề nghị:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Bộ phận Bắc Ninh</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Nhân viên đề nghị:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Nguyễn Nhật Tùng</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Ngày đề xuất:</Text>
                                    <Text style={{ marginLeft: 5 }}>19/01/2021</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 35 }}>Số lượng:</Text>
                                    <Text style={{ marginLeft: 5 }}>10</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Trạng thái:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Đang phê duyệt</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TÊN TS/TB/LK:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>MTSS</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Lý do:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Thảo test thử dự án app</Text>
                                </View>
                            </View>
                        </View>
                    </Swipeout>
                    <Swipeout right={swipeoutBtns}>
                        <View style={stylesPayment.elementView}>
                            <View>
                                <Image style={stylesPayment.inputIcon} source={require('../../asset/img/payment.png')} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Bộ phận đề nghị:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Bộ phận Bắc Ninh</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Nhân viên đề nghị:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Nguyễn Nhật Tùng</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold' }}>Ngày đề xuất:</Text>
                                    <Text style={{ marginLeft: 5 }}>19/01/2021</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 35 }}>Số lượng:</Text>
                                    <Text style={{ marginLeft: 5 }}>10</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Trạng thái:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Đang phê duyệt</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>TÊN TS/TB/LK:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>MTSS</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Lý do:</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 15 }}>Thảo test thử dự án app</Text>
                                </View>
                            </View>
                        </View>
                    </Swipeout>
                </View>
            </ScrollView>
        </View>
    )
}
export default PaymentComponent
