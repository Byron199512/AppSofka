import React from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from "i18next";

const languages = {
    en: { translation: require('./locales/en/translation.json') },
    es: { translation: require('./locales/es/translation.json') },
};



i18n
    .use(initReactI18next)
    .init({
        resources: languages,
        lng:  'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

interface Props {
    children: React.JSX.Element
}

export default function I18Provider({ children }: Props): React.JSX.Element {
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    )
}