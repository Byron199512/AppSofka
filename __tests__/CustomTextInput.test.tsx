import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { CustomTextInput } from '../app/ui/components/shared/CustomTextInput';

const errors = { name: 'Este campo es obligatorio' };
const handleChange = jest.fn();
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key, 
    }),
}));


describe('CustomTextInput', () => {
    it('debería renderizar el valor por defecto correctamente', () => {

        render(
            <CustomTextInput
                field="name"
                errors={errors}
                defaultValue="Producto"
                handleChange={handleChange}
            />
        );
        const input = screen.getByDisplayValue('Producto');
        expect(input).toBeTruthy();
    });

    it('debería llamar a handleChange cuando el texto cambia', () => {
        render(
            <CustomTextInput
                field="name"
                errors={errors}
                defaultValue="Producto"
                handleChange={handleChange}
            />
        );

        const input = screen.getByDisplayValue('Producto');
        fireEvent.changeText(input, 'Nuevo Producto');
        expect(handleChange).toHaveBeenCalledWith('Nuevo Producto');
    });

    it('debería mostrar el error si lo hay', () => {
        render(
            <CustomTextInput
                field="name"
                errors={errors}
                defaultValue="Producto"
                handleChange={handleChange}
            />
        );
        expect(screen.getByText('Este campo es obligatorio')).toBeTruthy();
    });
});
