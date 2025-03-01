
import { useTranslation } from 'react-i18next';
import { Dimensions, StyleSheet, View } from 'react-native'
import { SearchInput } from '../components/shared/SearchInput';
import { List } from '../components/shared/List';
import { IProductResponse } from '../../core/models/product/ProductResponse';
import { CustomButton } from '../components/shared/CustomButton';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from '../router/router';
import { Merge } from '../utils/createObject';
import { useHome } from '../hooks/screen/useHome';

const screenHeight = Dimensions.get('window').height;
export const Home = () => {
  const { t } = useTranslation();
  const { data, refreshing, setSearch, setRefreshing } = useHome();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();



  return (
    <View style={{ paddingHorizontal: 20 }}>
      <SearchInput setSearch={setSearch} />
      <View style={styles.container}>
        <List data={data} refreshing={refreshing} setRefreshing={setRefreshing} />
      </View>
      <CustomButton title={t('add')} onPress={() => navigation.navigate('ProductForm', Merge<IProductResponse>({}))} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.8,
    backgroundColor: 'white',
    borderColor: '#e8e7e7',
    borderWidth: 1,
    marginVertical: 5,
  },
});