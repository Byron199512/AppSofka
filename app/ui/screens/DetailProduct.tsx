import React, { useContext } from 'react'
import { Text } from 'react-native-gesture-handler'
import { RootStackParams } from '../router/router';
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Subtitle } from '../components/shared/Subtitle';
import { CustomButton } from '../components/shared/CustomButton';
import { AlertContext } from '../context/alert/AlertContext';
import { DependencyContext } from '../context/dependency/DependencyContext';
import { formatDateToShortString } from '../utils/formatDate';
const screenHeight = Dimensions.get('window').height;

export const DetailProduct = () => {
  const { showDialog, showAlert } = useContext(AlertContext);
  const { productUseCase } = useContext(DependencyContext)
  const { t } = useTranslation();
  const product = useRoute<RouteProp<RootStackParams, 'DetailProduct'>>().params;
  const navigation = useNavigation<NavigationProp<RootStackParams>>();


  const deleteProduct = async () => {
    const resp = await showDialog({ head: t('deleteConfirm', { name: product.name }), isVisible: true });
    if (resp) {
      const resp = await productUseCase.deleteProduct(product.id);
      await showAlert({ head: t('success'), message: resp.message })
      navigation.navigate('Home');
    }
  }


  return (
    <>
      <View style={{ paddingHorizontal: 20, height: screenHeight * 0.8 }}>
        <Text style={{ fontSize: 28, fontWeight: '500' }}>{t('id') + ":" + product.id}</Text>
        <Text style={{ fontSize: 14, opacity: 0.6, marginBottom: 50 }}>{t('extraInformation')}</Text>
        <Subtitle label={t('name')} value={product.name} />
        <Subtitle label={t('description')} value={product.description} />
        <Text style={{ fontSize: 18, opacity: 0.6 }}>{t('logo')}</Text>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            source={{ uri: product.logo }}
            style={styles.image}
          />
        </View>
        <Subtitle label={t('date_release')} value={formatDateToShortString(product.date_release)} />
        <Subtitle label={t('date_revision')} value={formatDateToShortString(product.date_revision)} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <CustomButton style={{ marginBottom: 6 }} title={t('update')} type='default' onPress={() => navigation.navigate('ProductForm', product)} />
        <CustomButton title={t('delete')} type='danger' onPress={() => deleteProduct()} />
      </View>

    </>
  )
}


const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
