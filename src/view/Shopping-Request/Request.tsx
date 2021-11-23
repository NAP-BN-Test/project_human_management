/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {ScrollView, View, Text, Image, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import {Action} from '../../redux/actions/index.action';
import {RequestSh} from '../../redux/states/type';
import {Appbar} from 'react-native-paper';
import styles from '../../asset/css/styles';
import {useNavigation} from '@react-navigation/native';
import stylesPayment from '../../view/Payment/stylePayment';
import Swipeout from 'react-native-swipeout';
import {withNavigationFocus} from 'react-navigation';

const ShoppingRequest = () => {
  const dispatch = useDispatch();
  const requests: Array<RequestSh> = useSelector(
    (state: RootState) => state.request_shopping,
  );

  useEffect(() => {
    const getRequestShopping = async () => {
      await dispatch(Action.act_get_requestshopping());
    };
    getRequestShopping();
  }, []);
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

      onPress: () => {
        _handlePD();
      },
      autoClose: true,
      // color: '#000000'
    },
    {
      text: 'Từ chối',
      backgroundColor: '#FBC02D',
      // underlayColor: '#000000',

      onPress: () => {
        _handleTC();
      },
      autoClose: true,
      color: '#000000',
    },
  ];
  const _handleSearch = () => console.log('Searching');
  const _handlePD = () => console.log('Phê duyệt');
  const _handleTC = () => console.log('Từ chối');

  console.log('REQUEST', requests);

  return (
    <View>
      <Appbar.Header style={styles.headerStyle} dark={true}>
        <Appbar.Action
          icon={require('../../asset/img/left-arrow.png')}
          onPress={_goBack}
        />
        <Appbar.Content title="Yêu cầu mua sắm" />
        <Appbar.Action
          icon={require('../../asset/img/search.png')}
          onPress={_handleSearch}
        />
        <Appbar.Action
          icon={require('../../asset/img/more.png')}
          onPress={_handleMore}
        />
      </Appbar.Header>
      <FlatList
        data={requests}
        renderItem={({item}: any) => {
          return (
            <Swipeout right={swipeoutBtns}>
              <View style={stylesPayment.elementView}>
                <View>
                  <Image
                    style={stylesPayment.inputIcon}
                    source={require('../../asset/img/payment.png')}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Bộ phận đề nghị:
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 15}}>
                      {item.departmentName}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Nhân viên đề nghị:
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 15}}>
                      {item.staffName}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>Ngày đề xuất:</Text>
                    <Text style={{marginLeft: 5}}>{item.requireDate}</Text>
                    <Text style={{fontWeight: 'bold', marginLeft: 35}}>
                      Số lượng:
                    </Text>
                    <Text style={{marginLeft: 5}}>{item.amount}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Trạng thái:
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 15}}>
                      {item.status}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      TÊN TS/TB/LK:
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 15}}>
                      {item.nameAsset}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Lý do:
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 15}}>
                      {item.reason}
                    </Text>
                  </View>
                </View>
              </View>
            </Swipeout>
          );
        }}></FlatList>
    </View>
  );
};

export default withNavigationFocus(ShoppingRequest);
