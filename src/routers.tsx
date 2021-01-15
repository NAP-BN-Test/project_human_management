import React, { useEffect } from 'react'
import { Scene, Router, ActionConst, Tabs } from 'react-native-router-flux'
import HomeController from './view/Home/Home'
import Login from './view/Login/Login'
// import Home from './View/Home/Home'

const Routes = () => {

    return (
        <Router>
            <Scene key="root">
                <Scene key="Login" component={Login} hideNavBar={true} />
                <Scene key="Home" component={HomeController} hideNavBar={true} />
                {/* <Tabs
               title='Hiện Trường'
               tabBarPosition='top'
               key="tabbar"
               showLabel={true} 
               lazy={true}
               // wrap={false}
               swipeEnabled
               tabBarStyle={{ backgroundColor: '#fff' }}
               labelStyle={{ color: 'blue', fontWeight: 'bold' }}
               indicatorStyle={{ backgroundColor: 'blue' }}
            >
               <Scene key="home" component={Home} tabBarLabel="Thực Hiện" back={false} hideNavBar={true}/>
               <Scene key="hientruongcheked" component={CheckedHT} tabBarLabel='Hoàn Thành' back={false} hideNavBar={true}/>
            </Tabs>
            <Scene key="kiemdem" component={KiemDem} title='Kiểm Đếm' /> */}
            </Scene>
        </Router>
    )
}
export default Routes