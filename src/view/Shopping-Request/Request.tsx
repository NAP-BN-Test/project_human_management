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
import {Services} from '../../services/services';

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

  async function _handlePD(value: any) {
    if (value.status === 'Chờ phê duyệt') {
      await dispatch(Action.act_approval_request_first(value.id));
    } else {
      await dispatch(Action.act_approval_request_second(value.id));
    }
    await dispatch(Action.act_get_requestshopping());
  }

  async function _handleTC(value: any) {
    if (value.status === 'Chờ phê duyệt') {
      await dispatch(Action.act_refuse_first_approval(value.id));
    } else {
      await dispatch(Action.act_refuse_second_approval(value.id));
    }
    await dispatch(Action.act_get_requestshopping());
  }

  const requestValue = (data: any) => {
    return data.map((value: any, index: number) => {
      return (
        <View key={index}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold'}}>TÊN TS/TB/LK:</Text>
            <Text style={{paddingLeft: 5}}>{value.name}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold'}}>Số lượng:</Text>
            <Text style={{paddingLeft: 5}}>{value.amount}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.Action
          icon={require('../../asset/img/left-arrow.png')}
          onPress={_goBack}
        />
        <Appbar.Content title="Yêu cầu mua sắm" />
      </Appbar.Header>
      <FlatList
        data={requests}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}: any) => {
          return (
            <Swipeout
              right={[
                {
                  text: 'Phê duyệt',
                  backgroundColor: '#0097A7',
                  onPress: () => {
                    _handlePD(item);
                  },
                },
                {
                  text: 'Từ chối',
                  backgroundColor: '#FBC02D',
                  onPress: () => {
                    _handleTC(item);
                  },
                  color: '#000000',
                },
              ]}>
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
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Ngày đề xuất:
                    </Text>
                    <Text style={{marginLeft: 5, fontSize: 15}}>
                      {item.requireDate}
                    </Text>
                  </View>

                  {requestValue(item.arrayTaiSanApp)}

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

export default ShoppingRequest;
