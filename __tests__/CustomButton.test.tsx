import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { CustomButton } from "../app/ui/components/shared/CustomButton";

test('given empty GroceryShoppingList, user can add an item to it', () => {
    //renderer.create(<CustomButton title='Agregar' />);
});