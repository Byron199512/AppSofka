import 'react-native-gesture-handler';
import { Appearance, View, } from 'react-native';
import { Router } from './app/ui/router/router';
import I18Provider from './app/ui/i18n/i18n';
import { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { DependencyProvider } from './app/ui/context/dependency/DependencyProvider';
import { AlertProvider } from './app/ui/context/alert/AlertProvider';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',  // Fondo blanco para toda la app
    card: '#fff',        // Fondo blanco para las pantallas
    text: '#000',        // Color de texto negro (opcional)
  },
};

function App(): React.JSX.Element {

  useEffect(() => {
    Appearance.setColorScheme('light');
  }, [])

  return (
    <I18Provider>
      <AlertProvider>
        <DependencyProvider>
          <NavigationContainer
            theme={theme}
          >
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <Router />
            </View>
          </NavigationContainer>
        </DependencyProvider>
      </AlertProvider>
    </I18Provider>

  );
}

export default App;
