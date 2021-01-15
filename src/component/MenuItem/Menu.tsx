import React from 'react'
import { Container, toggleCheckIn } from '../../redux/states/type'
import { View } from 'react-native';
import styles from '../../asset/css/styles';
import MenuItem from './MenuItem';


const Menu: React.FC = () => {

    return (
        <View style={styles.container}>
            <MenuItem />
        </View>
    );
}

export default Menu