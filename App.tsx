import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import * as React from 'react';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Text>Works</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
