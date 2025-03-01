import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { IProductCreateRequest } from '../../../core/models/product/ProductRequest'
import { FormikErrors } from 'formik'
import { useTranslation } from 'react-i18next'
interface Props {
    editable?: boolean;
    errors: FormikErrors<IProductCreateRequest>;
    field: keyof IProductCreateRequest;
    handleChange: (e: string) => void;
    min?: number;
    max?: number;
    defaultValue: any
}
export const CustomTextInput = ({ field, errors, defaultValue, editable, min, max, handleChange }: Props) => {
    const { t } = useTranslation();

    return (
        <>
            <Text>{t(field)}</Text>
            <TextInput
                editable={editable}
                style={[styles.input, { borderColor: !!errors[field] ? '#ef4444' : '#e8e7e7' }]}
                onChangeText={handleChange}
                defaultValue={defaultValue}
            />
            <View>
                {!!errors[field] &&
                    <Text style={{ color: '#ef4444' }}>{t(`${errors[field] || "empty"}`, { min, max })}</Text>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 5,
        height: 40,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'white',
        borderColor: '#e8e7e7',
        borderRadius: 5,
        width: '100%',
    },
});

