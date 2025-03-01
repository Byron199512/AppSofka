// test/YourComponent.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { Subtitle } from '../app/ui/components/shared/Subtitle';





test('Renderizar correctamente el Head', () => {
    const { getByText } = render(<Subtitle label='Subtitulo' value='Valor' />);
    expect(getByText('Subtitulo')).toBeTruthy();
    expect(getByText('Valor')).toBeTruthy();
});