import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import {Text, Button, IconButton} from 'react-native-paper';

import PageContainer from '../components/PageContainer';
import {useAppSelector} from '../hooks/useAppSelector';

function CharacterScreen({navigation, route}: any) {
  const url = route.params.url;

  const characters = useAppSelector(state => state.characters.results);
  const character = characters.find(character => character.url === url);

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
            {character?.name}
          </Text>
          <IconButton mode="contained" icon="heart" iconColor={'#fff'} />
        </View>
        <View style={styles.characterInfoWrapper}>
          <Text variant="bodyMedium">Height: {character?.height}</Text>
          <Text variant="bodyMedium">Mass: {character?.mass}</Text>
          <Text variant="bodyMedium">Hair color: {character?.hair_color}</Text>
          <Text variant="bodyMedium">Skin color: {character?.skin_color}</Text>
          <Text variant="bodyMedium">Eye color: {character?.eye_color}</Text>
          <Text variant="bodyMedium">Birth year: {character?.birth_year}</Text>
          <Text variant="bodyMedium">Gender: {character?.gender}</Text>
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
