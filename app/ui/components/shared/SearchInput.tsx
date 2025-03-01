import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, TextInput } from 'react-native'

interface Props {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}
export const SearchInput = ({ setSearch }: Props) => {
    const debounceRef: React.MutableRefObject<NodeJS.Timeout | undefined> = useRef<NodeJS.Timeout | undefined>(undefined);
    
    const { t } = useTranslation();
    const onQueryChanged = (event: string) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setSearch(event);
        }, 800);

    }
    return (
        <TextInput
            placeholder={t('search')}
            style={styles.input}
            onChangeText={(e) => onQueryChanged(e)}
        />
    )
}


const styles = StyleSheet.create({
    input: {
        marginTop: 5,
        height: 40,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'white',
        borderColor: '#e8e7e7',
        borderRadius: 5,
        width: '100%',
    },
});


