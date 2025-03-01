import axios, { AxiosError } from 'axios';

class AxiosErrorHandler {
    static handleError(error: AxiosError) {
        let errorMessage = '';
        let errorData = null;
        let statusCode = 0;
        if (axios.isAxiosError(error)) {
       
            if (error.response) {
                statusCode = error.response.status;
                errorMessage = error.message;
                errorData = error.response.data || null;
            }
            else if (error.request) {
                errorMessage = `Error de red: No se recibió respuesta`;
            }
            else {
                errorMessage = `Error desconocido: ${error.message}`;
            }
        } else {
            errorMessage = `Error desconocido: ${error}`;
        }
        return {
            status: statusCode,
            data: errorData,
            message: errorMessage,
        };
    }
}

export default AxiosErrorHandler;
