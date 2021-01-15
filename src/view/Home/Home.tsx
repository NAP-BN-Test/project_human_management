/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import stylesHome from './styleHome';
import Menu from '../../component/MenuItem/Menu'

declare const global: { HermesInternal: null | {} };

const HomeController = () => {
    return (
        <>
            <Menu />
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={stylesHome.scrollView}>
                    {/* <Colors /> */}
                    <Header />
                    {global.HermesInternal == null ? null : (
                        <View style={stylesHome.engine}>
                            <Text style={stylesHome.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <View style={stylesHome.body}>
                        <View style={stylesHome.sectionContainer}>
                            <Text style={stylesHome.sectionTitle}>Step One</Text>
                            <Text style={stylesHome.sectionDescription}>
                                Edit <Text style={stylesHome.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Text>
                        </View>
                        <View style={stylesHome.sectionContainer}>
                            <Text style={stylesHome.sectionTitle}>See Your Changes</Text>
                            <Text style={stylesHome.sectionDescription}>
                                <ReloadInstructions />
                            </Text>
                        </View>
                        <View style={stylesHome.sectionContainer}>
                            <Text style={stylesHome.sectionTitle}>Debug</Text>
                            <Text style={stylesHome.sectionDescription}>
                                <DebugInstructions />
                            </Text>
                        </View>
                        <View style={stylesHome.sectionContainer}>
                            <Text style={stylesHome.sectionTitle}>Learn More</Text>
                            <Text style={stylesHome.sectionDescription}>
                                Read the docs to discover what to do next:
              </Text>
                        </View>
                        <LearnMoreLinks />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default HomeController;
