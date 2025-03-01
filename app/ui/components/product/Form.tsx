import { Formik } from 'formik'
import React, { useContext } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { IProductCreateRequest } from '../../../core/models/product/ProductRequest'
import { CustomButton } from '../shared/CustomButton'
import { useTranslation } from 'react-i18next'
import ProductValidationSchema from '../../validation/productValidationSchema'
import { CustomTextInput } from '../shared/CustomTextInput'
import { DateInput } from '../shared/DateInput'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Head } from '../shared/Head'
import ProductUpdateValidationSchema from '../../validation/productUpdateValidationSchema'
import { DependencyContext } from '../../context/dependency/DependencyContext'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../router/router'
import { AlertContext } from '../../context/alert/AlertContext'
const screenHeight = Dimensions.get('window').height;
interface Props {
    initialValues: IProductCreateRequest
}
export const Form = ({ initialValues }: Props) => {
    const { t } = useTranslation();
    const { productUseCase } = useContext(DependencyContext)
    const { showAlert } = useContext(AlertContext)
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const createOrUpdateProduct = async (values: IProductCreateRequest) => {

        if (initialValues.id) {
            const resp = await productUseCase.updateProduct(initialValues.id, { ...values });
            await showAlert({ head: t('success'), message: resp.message })
            navigation.navigate('Home');
        } else {
            const respCreate = await productUseCase.createProduct(values);
            await showAlert({ head: t('success'), message: respCreate.message })
            navigation.navigate('Home');
        }

    }
    return (
        <>
            <Head title={t('registerForm')} />
            <Formik
                initialValues={initialValues}
                onSubmit={values => createOrUpdateProduct(values)}
                validationSchema={initialValues.id ? ProductUpdateValidationSchema : ProductValidationSchema}
            >
                {({ handleChange, handleSubmit, setFieldValue, resetForm, values, errors }) => (
                    <>

                        <View style={{ height: screenHeight * 0.7 }}>
                            <CustomTextInput
                                editable={!(initialValues.id)}
                                errors={errors}
                                field='id'
                                handleChange={handleChange('id')}
                                defaultValue={values.id}
                                min={3}
                                max={10}
                            />
                            <CustomTextInput
                                errors={errors}
                                field='name'
                                min={5}
                                max={100}
                                handleChange={handleChange('name')}
                                defaultValue={values.name}

                            />
                            <CustomTextInput
                                errors={errors}
                                field='description'
                                handleChange={handleChange('description')}
                                defaultValue={values.description}
                                min={10}
                                max={200}
                            />
                            <CustomTextInput
                                errors={errors}
                                field='logo'
                                handleChange={handleChange('logo')}
                                defaultValue={values.logo}
                            />
                            <DateInput
                                defaultValue={values.date_release}
                                errors={errors}
                                field='date_release'
                                setFieldValue={setFieldValue}
                            />
                            <DateInput
                                defaultValue={values.date_release}
                                errors={errors}
                                field='date_revision'
                                setFieldValue={setFieldValue}
                            />

                        </View>
                        <CustomButton style={{ marginBottom: 5 }} title={initialValues.id ? t('updateForm') : t('send')} onPress={handleSubmit} />
                        {
                            !initialValues.id &&
                            <CustomButton title={t('reset')} onPress={resetForm} type='default' />
                        }
                    </>
                )}
            </Formik>
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


