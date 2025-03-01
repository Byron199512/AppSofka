import React, { useContext } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from './CustomButton';
import { useTranslation } from 'react-i18next';
import { AlertContext } from '../../context/alert/AlertContext';

export const AlertModal = () => {
    const { t } = useTranslation();
    const { alert, closeAlert } = useContext(AlertContext)
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={alert.isVisible}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{alert.head}</Text>
                    <Text style={styles.modalMessage}>{alert.message}</Text>
                    <CustomButton title={t('ok')} onPress={() => closeAlert(true)} />
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
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        marginBottom: 20,
    },
});