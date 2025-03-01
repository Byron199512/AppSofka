import React, { useEffect, useState } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import MaskInput from 'react-native-mask-input';
import { IProductCreateRequest } from '../../../core/models/product/ProductRequest';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { formatDate, parseDate } from '../../utils/formatDate';
interface Props {
    errors: FormikErrors<IProductCreateRequest>;
    field: keyof IProductCreateRequest;
    setFieldValue: (field: string, value: any) => void;
    defaultValue: any
}
export const DateInput = ({ defaultValue, errors, field, setFieldValue }: Props) => {
    const { t } = useTranslation();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [formattedDate, setFormattedDate] = useState(defaultValue);

    useEffect(() => {
        if (defaultValue === undefined) setFormattedDate("")
    }, [defaultValue])


    const onChange = (_: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios' ? true : false);
        setDate(currentDate);
        setFieldValue(field, currentDate)
        setFormattedDate(formatDate(currentDate));
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const handleDateChange = (value: string) => {
    
        setFieldValue(field, new Date(value));
        setFormattedDate(value);
    };

    return (
        <View style={{ position: 'relative' }}>
            <Text>{t(field)}</Text>
            <MaskInput
                style={[styles.input, { borderColor: !!errors[field] ? '#ef4444' : '#e8e7e7' }]}
                mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                keyboardType="numeric"
                value={formattedDate}
                onChangeText={handleDateChange}
            />

            <Icon style={{ position: 'absolute', right: 0, top: 30 }} name='calendar' size={25} onPress={showDatepicker} />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <View>
                {!!errors[field] &&
                    <Text style={{ color: '#ef4444' }}>{t(`${errors[field] || "empty"}`)}</Text>}
            </View>
        </View>
    );
};




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
