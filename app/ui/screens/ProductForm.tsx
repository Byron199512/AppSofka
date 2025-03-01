import React from 'react'
import { Text } from 'react-native-gesture-handler'
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParams } from '../router/router';
import { Form } from '../components/product/Form';
import { View } from 'react-native';
export const ProductForm = () => {
  const { ...rest } = useRoute<RouteProp<RootStackParams, 'ProductForm'>>().params;
  return (
    <View style={{paddingHorizontal:20, flex:1}}>
      <Form initialValues={rest} />
    </View>
  )
}
