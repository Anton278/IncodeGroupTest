import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import CharacterScreen from './src/screens/Character';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Character" component={CharacterScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
