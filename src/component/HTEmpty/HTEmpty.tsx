import React from 'react'
import { View, Text } from 'react-native';
import styles from '../../asset/css/styles';

interface HTEmptyProps {
    text: string
}

const HTEmpty: React.FC<HTEmptyProps> = ({ text }) => {

    return (
        <View style={styles.container}>
            <View style={{ padding: 10, alignItems: 'center' }}>
                <Text style={{ color: '#000', fontSize: 15 }}>{text}</Text>
            </View>
        </View>
    );
}

export default HTEmpty