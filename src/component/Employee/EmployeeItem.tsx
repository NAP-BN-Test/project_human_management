import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Caption, Paragraph } from 'react-native-paper';
import stylesEmployee from './EmployeeStyle';

const EmployeeItem = () => {
    return (
        <View style={stylesEmployee.row}>
            <View style={stylesEmployee.section}>
                <Paragraph style={[stylesEmployee.paragraph, stylesEmployee.caption]}>80</Paragraph>
                <Caption style={stylesEmployee.caption}>Thông báo</Caption>
            </View>
            <View style={stylesEmployee.section}>
                <Paragraph style={[stylesEmployee.paragraph, stylesEmployee.caption]}>100</Paragraph>
                <Caption style={stylesEmployee.caption}>Chuyên cần</Caption>
            </View>
            <View style={stylesEmployee.section}>
                <Paragraph style={[stylesEmployee.paragraph, stylesEmployee.caption]}>100</Paragraph>
                <Caption style={stylesEmployee.caption}>Chuyên cần</Caption>
            </View>
        </View>
    )
}

export default EmployeeItem;