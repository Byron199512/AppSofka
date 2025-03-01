import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
interface Props {
    title: string;
    onPress?: () => void;
    type?: "default" | "primary" | "danger";
    style?: StyleProp<ViewStyle>
}
export const CustomButton = ({ title, type = "primary", style, onPress }: Props) => {
    const typeColor = () => {
        switch (type) {
            case "danger": return "#ff4d4d"
            case "primary": return "#ffdd00"
            case "default": return "#DDDDDD"
        }
    }
    const typeColorText = () => {
        switch (type) {
            case "danger": return "white"
            case "primary": return "black"
            case "default": return "black"
        }
    }
    return (
        <TouchableOpacity style={[{ ...styles.button, backgroundColor: typeColor(), }, style]}
            onPress={onPress}>
            <Text style={{color:typeColorText()}}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 10,
        width:'100%'
    }
});