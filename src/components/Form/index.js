import React, {useState} from "react";
import { TextInput,
     Text,
     View,
     TouchableOpacity,
     Vibration,
     TouchableWithoutFeedback,
     Keyboard
    } from "react-native";
import ResultImc from "./ResultImc";
import Styles from './style';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        return setImc((weight/(height * height)).toFixed(2))
    }

    function verificationImc() {
        if(imc === null){
            Vibration.vibrate();
            setErrorMessage("campo obrigatorio*");
        }
    }

    function validationImc() {
        if(weight && height){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("seu imc é igual:");
            setTextButton("Calcular novamente");
            setErrorMessage(null);
        }else {
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
    }

    return (
        <DismissKeyboard>
        <View style={Styles.formContext}>
            <View style={Styles.form}>
                <Text style={Styles.formLabel} >
                    Altura
                </Text>
                <Text style={Styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text style={Styles.formLabel}>
                    Peso
                </Text>
                <Text style={Styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                 style={Styles.buttonCalculator}
                 onPress={()=> validationImc()}
                >
                <Text
                    style={Styles.textButtonCalculator}
                >
                    {textButton}
                </Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
        </DismissKeyboard>
    );
}