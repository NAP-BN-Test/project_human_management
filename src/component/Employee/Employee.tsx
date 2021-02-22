import React from 'react'
import { Container, toggleCheckIn } from '../../redux/states/type'
import { View } from 'react-native';
import styles from '../../asset/css/styles';
import EmployeeItem from './EmployeeItem';


const Employee: React.FC = () => {

    return (
        <View style={styles.container}>
            <EmployeeItem />
        </View>
    );
}

export default Employee