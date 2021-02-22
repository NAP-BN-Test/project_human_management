import React, { useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index.reducer';
import { Action } from '../../redux/actions/index.action';
import { RequestSh } from '../../redux/states/type'
import { Appbar } from 'react-native-paper';
import styles from '../../asset/css/styles';
import { useNavigation } from '@react-navigation/native';
import stylesPayment from '../../view/Payment/stylePayment';
import Swipeout from 'react-native-swipeout';
import { withNavigationFocus } from 'react-navigation';

const ShoppingRequest = () => {
    console.log(12);

    const dispatch = useDispatch()
    const requests: Array<RequestSh> = useSelector((state: RootState) => state.request_shopping)

    useEffect(() => {
        const getRequestShopping = async () => {
            await dispatch(Action.act_get_requestshopping())
        }
        getRequestShopping()
    }, [])
    const navigation = useNavigation();
    const _goBack = () => {
        navigation.goBack();

    };
    const _handleMore = () => console.log('Shown more');
    var swipeoutBtns = [
        {
            text: 'Phê duyệt',
            backgroundColor: '#0097A7',
            // underlayColor: '#000000',

            onPress: () => { _handlePD() },
            autoClose: true,
            // color: '#000000'
        },
        {
            text: 'Từ chối',
            backgroundColor: '#FBC02D',
            // underlayColor: '#000000',

            onPress: () => { _handleTC() },
            autoClose: true,
            color: '#000000'
        }
    ]
    const _handleSearch = () => console.log('Searching');
    const _handlePD = () => console.log('Phê duyệt');
    const _handleTC = () => console.log('Từ chối');
    return (
        <View>
            <Appbar.Header style={styles.headerStyle} dark={true}>
                <Appbar.Action icon={require('../../asset/img/left-arrow.png')} onPress={_goBack} />
                <Appbar.Content title="Yêu cầu mua sắm" />
                <Appbar.Action icon={require('../../asset/img/search.png')} onPress={_handleSearch} />
                <Appbar.Action icon={require('../../asset/img/more.png')} onPress={_handleMore} />
            </Appbar.Header>
            <ScrollView>
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
            </ScrollView>

        </View>
    )
}


export default withNavigationFocus(ShoppingRequest)
