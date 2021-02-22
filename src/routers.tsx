import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { Scene, Router, ActionConst, Tabs } from 'react-native-router-flux'
import HomeController from './view/Home/Home'
import Login from './view/Login/Login'
import Request from './view/Shopping-Request/Request'
// import Home from './View/Home/Home'
const Drawer = createDrawerNavigator();

const Routes = () => {

    return (
        <Router>
            <Scene key="root">
                <Scene key="Login" component={Login} hideNavBar={true} />
                <Scene key="Home" component={HomeController} hideNavBar={true} />
                <Scene key="Requests" component={Request} back={false} tabBarLabel='Hoàn Thành' />
            </Scene>
        </Router>
    )
}
export default Routes

