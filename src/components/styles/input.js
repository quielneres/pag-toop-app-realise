import {StyleSheet} from "react-native";
import {colors, fonts} from "./index";

export const stylesForm = StyleSheet.create({
    input: {
        fontSize: fonts.bigger,
        color: colors.regular,
        margin: 0,
        padding: 0,
    },
    label: {
        fontSize: fonts.bigger,
        color: colors.light,
        paddingTop: -10
    },
    error: {
        fontSize: fonts.regular,
        color: colors.darker,
        marginTop: 5,
        fontWeight: 'bold',
    },
});

