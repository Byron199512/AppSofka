import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { useRoute } from '@react-navigation/native';
import { ProductForm } from '../app/ui/screens/ProductForm';


jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(),
}));

jest.mock('@react-native-community/datetimepicker', () => {
    return {
        DateTimePicker: jest.fn(() => null),
    };
});

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon');
jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: jest.fn().mockReturnValue({
            navigate: jest.fn(),
            goBack: jest.fn(),
            push: jest.fn(),
            replace: jest.fn(),

        }),
        useRoute: jest.fn(),
    };
});

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key
    }),
}));

describe('ProductForm', () => {
    it('Renderiza el formulario', () => {

        const routeParams = { name: 'Valor' };
        (useRoute as jest.Mock).mockReturnValue({ params: routeParams });
        const {getByText}=render(
            <ProductForm />
        );

    });
});
