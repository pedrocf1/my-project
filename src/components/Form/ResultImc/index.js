import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Share,
} from "react-native";
import Styles from './style'

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu imc hoje é: ${props.resultImc}`,
        })
    }

    return (
        <View style={Styles.resultImc}>
            <View style={Styles.boxSharebutton}>
                <Text styles={Styles.numberImc}> {props.resultImc} </Text>
                <TouchableOpacity 
                    onPress={onShare}
                    style={Styles.shared}
                >
                    <Text style={Styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
            <Text styles={Styles.information}>{props.messageResultImc}</Text>
        </View>
    );
}
