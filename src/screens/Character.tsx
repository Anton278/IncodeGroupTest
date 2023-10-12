import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import {Text, Button, IconButton} from 'react-native-paper';
import {useEffect, useState} from 'react';

import PageContainer from '../components/PageContainer';
import {useAppSelector} from '../hooks/useAppSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {getPlanet} from '../redux/slices/planets/thunks';
import {getFilm} from '../redux/slices/films/thunks';
import {getVehicle} from '../redux/slices/vehicles/thunks';
import {getStarship} from '../redux/slices/starships/thunks';

function CharacterScreen({navigation, route}: any) {
  const url = route.params.url;
  const dispatch = useAppDispatch();

  const characters = useAppSelector(state => state.characters.results);
  const character = characters.find(character => character.url === url);

  const [isLoading, setIsLoading] = useState(true);

  if (!character) {
    return navigation.navigate('Home');
  }

  const planets = useAppSelector(state => state.planets.planets);
  const films = useAppSelector(state => state.films.films);
  const species = useAppSelector(state => state.species.species);
  const vehicles = useAppSelector(state => state.vehicles.vehicles);
  const starships = useAppSelector(state => state.starships.starships);

  const homeworld = planets.find(planet => planet.url === character.homeworld);
  const characterFilms = character.films
    .map(characterFilm => {
      const film = films.find(film => film.url === characterFilm);
      return film?.title;
    })
    .join(', ');
  const characterSpecies = character.species
    .map(characterSpecie => {
      const specie = species.find(specie => specie.url === characterSpecie);
      return specie?.name;
    })
    .join(', ');
  const characterVehicles = character.vehicles
    .map(characterVehicle => {
      const vehicle = vehicles.find(
        vehicle => vehicle.url === characterVehicle,
      );
      return vehicle?.name;
    })
    .join(', ');
  const characterStarships = character.starships
    .map(characterStarship => {
      const starship = starships.find(
        starship => starship.url === characterStarship,
      );
      return starship?.name;
    })
    .join(', ');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      async function getCharacter() {
        if (!character) {
          return navigation.navigate('Home');
        }

        if (!homeworld) {
          await dispatch(getPlanet(character.homeworld));
        }

        await Promise.all(
          character.films.map(characterFilm => {
            const film = films.find(film => film.url === characterFilm);
            if (!film) {
              return dispatch(getFilm(characterFilm));
            }
          }),
        );

        await Promise.all(
          character.vehicles.map(characterVehicle => {
            const vehicle = vehicles.find(
              vehicle => vehicle.url === characterVehicle,
            );
            if (!vehicle) {
              return dispatch(getVehicle(characterVehicle));
            }
          }),
        );

        await Promise.all(
          character.starships.map(characterStarship => {
            const starship = starships.find(
              starship => starship.url === characterStarship,
            );
            if (!starship) {
              return dispatch(getStarship(characterStarship));
            }
          }),
        );

        setIsLoading(false);
      }

      getCharacter();
    });

    return unsubscribe;
  }, [navigation]);

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
        {isLoading ? (
          <Text variant="bodyMedium">Loading...</Text>
        ) : (
          <>
            <View style={styles.characterNameBar}>
              <Text variant="headlineMedium" style={styles.characterName}>
                {character?.name}
              </Text>
              <IconButton mode="contained" icon="heart" iconColor={'#fff'} />
            </View>
            <View style={styles.characterInfoWrapper}>
              <Text variant="bodyMedium">Height: {character?.height}</Text>
              <Text variant="bodyMedium">Mass: {character?.mass}</Text>
              <Text variant="bodyMedium">
                Hair color: {character?.hair_color}
              </Text>
              <Text variant="bodyMedium">
                Skin color: {character?.skin_color}
              </Text>
              <Text variant="bodyMedium">
                Eye color: {character?.eye_color}
              </Text>
              <Text variant="bodyMedium">
                Birth year: {character?.birth_year}
              </Text>
              <Text variant="bodyMedium">Gender: {character?.gender}</Text>
              <Text variant="bodyMedium">Homeworld: {homeworld?.name}</Text>
              <Text variant="bodyMedium">Films: {characterFilms}</Text>
              <Text variant="bodyMedium">
                Species: {characterSpecies.length ? characterSpecies : '-'}
              </Text>
              <Text variant="bodyMedium">
                Vehicles: {characterVehicles.length ? characterVehicles : '-'}
              </Text>
              <Text variant="bodyMedium">
                Starships:{' '}
                {characterStarships.length ? characterStarships : '-'}
              </Text>
            </View>
          </>
        )}
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
