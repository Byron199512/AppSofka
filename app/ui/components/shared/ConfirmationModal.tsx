import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Modal, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomButton } from './CustomButton';
import { AlertContext } from '../../context/alert/AlertContext';

const withScreen = Dimensions.get('screen').width;
export const ConfirmationModal = () => {
    const { t } = useTranslation();
    const { confirmation, confirmAction } = useContext(AlertContext)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={confirmation.isVisible}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.close}>
                        <TouchableOpacity onPress={() => confirmAction(false)}>

                            <Icon name='close' size={28} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider} />
                    <Text style={styles.modalText}>{confirmation.head}</Text>
                    <View style={styles.divider} />
                    <View style={{ display: 'flex', width: withScreen - 20 }}>
                        <CustomButton style={{ marginBottom: 10 }} title={t('confirm')} onPress={() => confirmAction(true)}/>
                        <CustomButton title={t('cancel')} type='default' onPress={() => confirmAction(false)}/>

                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '100%',
        padding: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '600'
    },
    closeButton: {
        backgroundColor: '#ff4d4d',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    close: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-end',
    },
    divider: {
        height: 1,
        width: withScreen,
        backgroundColor: '#D3D3D3',
        marginVertical: 20,
    },
});
