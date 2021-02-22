/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    View,
    Text,
    useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContents';
import ShoppingRequest from '../Shopping-Request/Request';
import Payment from '../Payment/payment';
declare const global: { HermesInternal: null | {} };
const Drawer = createDrawerNavigator();
function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
        </View>
    );
}
const HomeController = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <NavigationContainer>
            <Drawer.Navigator
                openByDefault
                drawerType={isLargeScreen ? 'permanent' : 'back'}
                drawerStyle={isLargeScreen ? null : { width: '70%' }}
                overlayColor="transparent"
                drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="ShoppingRequest" component={ShoppingRequest} />
                <Drawer.Screen name="Payment" component={Payment} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default HomeController;
