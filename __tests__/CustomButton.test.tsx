// test/YourComponent.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { CustomButton } from '../app/ui/components/shared/CustomButton';



test('Renderizar correctamente el CustomButton', () => {
  const { getByText } = render(<CustomButton title="Agregar" onPress={() => {}} />);
  expect(getByText('Agregar')).toBeTruthy();
});