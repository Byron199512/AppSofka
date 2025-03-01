import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { SearchInput } from '../app/ui/components/shared/SearchInput';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('SearchInput', () => {
    it('debería renderizar el placeholder correctamente', () => {
        render(<SearchInput setSearch={jest.fn()} />);
        const input = screen.getByPlaceholderText('search');
        expect(input).toBeTruthy();
    });

    it('debería llamar a setSearch con el texto después de un retraso', async () => {
        const setSearchMock = jest.fn();
        render(<SearchInput setSearch={setSearchMock} />);
        const input = screen.getByPlaceholderText('search');
        fireEvent.changeText(input, 'Producto');
        await waitFor(() => {
            expect(setSearchMock).toHaveBeenCalledWith('Producto');
        });
    });
});
