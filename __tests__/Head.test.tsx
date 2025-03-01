// test/YourComponent.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';

import { Head } from '../app/ui/components/shared/Head';



test('Renderizar correctamente el Head', () => {
    const { getByText } = render(<Head title='Titulo' />);
    expect(getByText('Titulo')).toBeTruthy();
});