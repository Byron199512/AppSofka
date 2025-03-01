import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { IAlert, IConfirmationModal } from '../../interfaces/Alert';
import { Merge } from '../../utils/createObject';
import { Alert, DeviceEventEmitter } from 'react-native';
import { AlertContext } from './AlertContext';
import { useTranslation } from 'react-i18next';
import AxiosErrorHandler from '../../../infraestructure/http/axiosErrorHanlder';
import { waiting } from '../../utils/sleep';


interface AlertProviderProps {
    children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const { t } = useTranslation();
    const [confirmation, setConfirmation] = useState<IConfirmationModal>(Merge<IConfirmationModal>({ isVisible: false }));
    const [alert, setAlert] = useState<IAlert>(Merge<IAlert>({ isVisible: false }));
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const eventListener = DeviceEventEmitter.addListener('axiosError', (event) => {
            const { detail } = event;
            const errorInfo = AxiosErrorHandler.handleError(detail);
            let data = errorInfo.data as any
            Alert.alert(errorInfo.status.toString(), data.message || errorInfo.message)
        });
        return () => {
            eventListener.remove();
        };
    }, []);


    useEffect(() => {
        const eventListener = DeviceEventEmitter.addListener('loading', async (event) => {
            const { detail } = event;
            if (detail) setLoading(detail)
            else {
                await waiting(2000);
                setLoading(detail)
            }

        });
        return () => {
            eventListener.remove();
        };
    }, []);


    const waitResponse = (): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
            function resolveAlert(event: any) {
                resolve(event.detail)
            }
            DeviceEventEmitter.addListener('getResponse', resolveAlert);
        })
    }


    const showDialog = async (alertInput: IConfirmationModal) => {
        setConfirmation({ ...confirmation, ...alertInput, isVisible: true });
        let resp: boolean = await waitResponse();
        return resp;
    }

    const confirmAction = (confirm: boolean) => {
        setConfirmation(Merge<IConfirmationModal>({
            ...confirmation,
            isVisible: false
        }));
        DeviceEventEmitter.emit('getResponse', { detail: confirm })
    }



    const waitAlert = (): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
            function closeAlert(event: any) {
                resolve(event.detail)
            }
            DeviceEventEmitter.addListener('closeAlert', closeAlert);
        })
    }


    const showAlert = async (alertInput: IAlert) => {
        setAlert({ ...alert, ...alertInput, isVisible: true });
        let resp: boolean = await waitAlert();
        return resp;
    }

    const closeAlert = (confirm: boolean) => {
        setAlert(Merge<IAlert>({
            ...alert,
            isVisible: false
        }));
        DeviceEventEmitter.emit('closeAlert', { detail: confirm })
    }

    return (
        <AlertContext.Provider value={{ alert, confirmation, loading, showDialog, confirmAction, showAlert, closeAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

