import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import {Text, Button, IconButton} from 'react-native-paper';

import PageContainer from '../components/PageContainer';

function CharacterScreen({navigation}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer>
        <View style={styles.backBtnWrapper}>
          <Button
            mode="text"
            onPress={() => navigation.navigate('Home')}
            icon={'chevron-left'}>
            Go back
          </Button>
        </View>
        <View style={styles.characterNameBar}>
          <Text variant="headlineMedium" style={styles.characterName}>
            Luke Skywalker
          </Text>
          <IconButton mode="contained" icon="heart" iconColor={'#fff'} />
        </View>
        <View style={styles.characterInfoWrapper}>
          <Text variant="bodyMedium">Height: 172</Text>
          <Text variant="bodyMedium">Mass: 77</Text>
          <Text variant="bodyMedium">Hair color: blond</Text>
          <Text variant="bodyMedium">Skin color: fair</Text>
          <Text variant="bodyMedium">Eye color: blue</Text>
          <Text variant="bodyMedium">Birth year: 19BBY</Text>
          <Text variant="bodyMedium">Gender: male</Text>
          <Text variant="bodyMedium">Homeworld: planet 1</Text>
          <Text variant="bodyMedium">Films: film 1, film 2, film 3</Text>
          <Text variant="bodyMedium">Species: -</Text>
          <Text variant="bodyMedium">Vehicles: -</Text>
          <Text variant="bodyMedium">Starships: -</Text>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  characterName: {
    marginBottom: 10,
  },
  backBtnWrapper: {alignItems: 'flex-start', marginBottom: 30},
  characterInfoWrapper: {
    rowGap: 5,
  },
  characterNameBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CharacterScreen;
