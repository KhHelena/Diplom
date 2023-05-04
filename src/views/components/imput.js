import React from "react";
import { View, Text} from "react-native";
import { gStyle } from '../../../styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Input=({
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {
    return (
    <View style ={gStyle.space}>
        <Text style={gStyle.label}>{label}</Text>
        <View style={[gStyle.inputContainer]}></View>
    </View>
    );
};
export default Input;
