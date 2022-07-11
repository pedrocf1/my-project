import React from "react";
import { View, Text } from "react-native";
import Styles from './style'

export default function ResultImc(props) {
    return (
        <View style={Styles.resultImc}>
            <Text styles={Styles.information}>
                {props.messageResultImc}
                </Text>
            <Text styles={Styles.numberImc}>
                {props.resultImc}
            </Text>
        </View>
    );
}
