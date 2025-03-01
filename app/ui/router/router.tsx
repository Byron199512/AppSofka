

import { useTranslation } from 'react-i18next';
import { Home } from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailProduct } from '../screens/DetailProduct';
import { ProductForm } from '../screens/ProductForm';
import { IProductResponse } from '../../core/models/product/ProductResponse';
import { ConfirmationModal } from '../components/shared/ConfirmationModal';
import { AlertModal } from '../components/shared/AlertModal';



export type RootStackParams = {
  Home: undefined,
  ProductForm: IProductResponse,
  DetailProduct: IProductResponse
}

const Stack = createStackNavigator<RootStackParams>();
export const Router = () => {
  const { t } = useTranslation()
  return (
    <>

      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: t('title'), headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{ title: t('title'), headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="ProductForm"
          component={ProductForm}
          options={{ title: t('title'), headerTitleAlign: 'center' }}
        />

      </Stack.Navigator>
      <ConfirmationModal />
      <AlertModal />
    </>

  );
}
