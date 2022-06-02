import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { useCachedResources } from './src/hooks/useCachedResources';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
