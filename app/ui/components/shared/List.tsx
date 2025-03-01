import React, { useContext, useState } from 'react'
import { RefreshControl, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { IProductResponse } from '../../../core/models/product/ProductResponse'
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../../router/router';
import { ListSkeleton } from '../skeleton/ListSkeleton';
import { AlertContext } from '../../context/alert/AlertContext';
interface Props {
    data: IProductResponse[];
    setRefreshing: React.Dispatch<React.SetStateAction<boolean>>;
    refreshing: boolean
}

type ItemProps = {
    item: IProductResponse;
    onPress: () => void;
    backgroundColor: string;

};

const Item = ({ item, onPress, backgroundColor }: ItemProps) => {
    const { t } = useTranslation();
    return (
        <View style={[styles.item, { backgroundColor, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }]}>
            <View>
                <Text style={[styles.title]}>{item.name}</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ opacity: 0.5 }}>{t('id')}:</Text>
                    <Text>{item.id}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPress} >
                <Icon name='chevron-forward-outline' size={25} />
            </TouchableOpacity>
        </View>
    )
};


export const List = ({ data, refreshing, setRefreshing }: Props) => {
    const { t } = useTranslation();
    const { loading } = useContext(AlertContext);

    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const renderItem = ({ item }: { item: IProductResponse }) => {
        return (
            <Item
                item={item}
                onPress={() => navigation.navigate('DetailProduct', item)}
                backgroundColor={"#ffffff"}
            />
        );
    };

    return (
        <>
            {

                loading ?
                    <ListSkeleton /> :
                    (data.length > 0) ?
                        <FlatList
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
                            }
                            data={data}
                            renderItem={renderItem}
                            ListEmptyComponent={<ListSkeleton />}
                            keyExtractor={item => item.id}
                        />
                        :
                        <ScrollView contentContainerStyle={styles.noDataView}
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
                            }
                        >
                            <Text style={styles.noDataText}>{t('noData')}</Text>
                        </ScrollView>
            }
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    noDataView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        padding: 20,
        borderColor: '#e8e7e7',
        marginHorizontal: 1,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 14,
    },
    noDataText: {
        fontSize: 18,
        color: 'gray',
    },
});

