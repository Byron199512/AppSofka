import { createContext } from "react";
import { Merge } from "../../utils/createObject";
import { IAlert, IConfirmationModal } from "../../interfaces/Alert";

interface AlertContextType {
    confirmation: IConfirmationModal;
    alert: IAlert,
    loading:boolean;
    showAlert: (alertInput: IAlert) => Promise<boolean>;
    closeAlert: (confirm: boolean) => void;
    showDialog: (alertInput: IConfirmationModal) => Promise<boolean>;
    confirmAction: (confirmation: boolean) => void;
}

export const AlertContext = createContext<AlertContextType>(Merge<AlertContextType>({}));
