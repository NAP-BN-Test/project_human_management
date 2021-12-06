/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component, useEffect, useState} from 'react';
import {Appbar} from 'react-native-paper';
import {View, Text, Image, FlatList} from 'react-native';
import stylesPayment from '../../view/Payment/stylePayment';
import {useNavigation} from '@react-navigation/native';
import styles from '../../asset/css/styles';
import Swipeout from 'react-native-swipeout';
import {useDispatch, useSelector} from 'react-redux';
import {PayOrder} from '../../redux/states/type';
import {RootState} from '../../redux/reducers/index.reducer';
import {Action} from '../../redux/actions/index.action';

const PaymentComponent = () => {
  const dispatch = useDispatch();
  const payorder: Array<PayOrder> = useSelector(
    (state: RootState) => state.payorder,
  );

  useEffect(() => {
    const getPayOrder = async () => {
      await dispatch(Action.act_get_payorder());
    };
    getPayOrder();
  }, []);

  const navigation = useNavigation();
  const _goBack = () => {
    navigation.goBack();
  };

  async function _handlePD(value: any) {
    if (value.trangThaiPheDuyetKT === 'Chờ phê duyệt') {
      await dispatch(Action.act_approval_employee_accountant(value.id));
    } else {
      await dispatch(Action.act_approval_employee_leader(value.id));
    }
    await dispatch(Action.act_get_payorder());
  }

  async function _handleTC(value: any) {
    if (value.trangThaiPheDuyetKT === 'Chờ phê duyệt') {
      await dispatch(Action.act_refuse_employee_accountant(value.id));
    } else {
      await dispatch(Action.act_refuse_employee_leader(value.id));
    }
    await dispatch(Action.act_get_payorder());
  }

  console.log(payorder);

  return (
    <View>
      <View>
        <Appbar.Header style={styles.headerStyle}>
          <Appbar.Action
            icon={require('../../asset/img/left-arrow.png')}
            onPress={_goBack}
          />
          <Appbar.Content title="Đề nghị thanh toán" />
        </Appbar.Header>
      </View>
      <FlatList
        data={payorder}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}: any) => {
          return (
            <>
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
                        {item.nameNhanVien}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold', fontSize: 15}}>
                        Đối tượng:
                      </Text>
                      <Text style={{marginLeft: 5, fontSize: 15}}>
                        {item.objectName}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontWeight: 'bold'}}>Tổng tiền:</Text>
                      <Text style={{marginLeft: 5}}>{item.money}</Text>
                      <Text style={{fontWeight: 'bold', marginLeft: 35}}>
                        Loại tiền:
                      </Text>
                      <Text style={{marginLeft: 5}}>{item.typeMoney}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        TT phê duyệt kế toán:
                      </Text>
                      <Text style={{marginLeft: 5, fontSize: 15}}>
                        {item.trangThaiPheDuyetKT}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        TT phê duyệt lãnh đạo:
                      </Text>
                      <Text style={{marginLeft: 5, fontSize: 15}}>
                        {item.trangThaiPheDuyetLD}
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
            </>
          );
        }}></FlatList>
    </View>
  );
};
export default PaymentComponent;
