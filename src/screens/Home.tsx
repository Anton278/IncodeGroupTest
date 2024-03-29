import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import {Text, Button, useTheme} from 'react-native-paper';
import {useEffect, useState} from 'react';

import PageContainer from '../components/PageContainer';
import Favourites from '../components/Favourites';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import {useAppSelector} from '../hooks/useAppSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {getCharacters} from '../redux/slices/characters/thunks';
import {RequestStatus} from '../models/RequestStatus';
import {getSpecie} from '../redux/slices/species/thunks';
import {clearFavourites} from '../redux/slices/favourites/thunks';

function HomeScreen() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.results);
  const charactersStatus = useAppSelector(state => state.characters.status);
  const charactersTotalCount = useAppSelector(state => state.characters.count);
  const species = useAppSelector(state => state.species.species);
  const [isLoadingSpecies, setIsLoadingSpecies] = useState(true);

  const [page, setPage] = useState(0);

  function onPageChange(num: number) {
    dispatch(getCharacters(num + 1));
    setPage(num);
  }

  function onClearFavouritesPress() {
    dispatch(clearFavourites());
  }

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  useEffect(() => {
    if (charactersStatus !== RequestStatus.Success) {
      return;
    }

    async function getSpecies() {
      setIsLoadingSpecies(true);

      await Promise.all(
        characters.map(character => {
          const specie = species.find(
            specie => specie.url === character.species[0],
          );
          if (!specie) {
            return dispatch(getSpecie(character.species[0]));
          }
        }),
      );

      setIsLoadingSpecies(false);
    }

    getSpecies();
  }, [characters, charactersStatus]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <PageContainer>
        <View style={styles.topBar}>
          <Text variant="headlineMedium">Favourites</Text>
          <Button
            mode="outlined"
            onPress={onClearFavouritesPress}
            style={styles.clearFavsButton}>
            Clear favourites
          </Button>
        </View>
        <Favourites />
        {charactersStatus === RequestStatus.Error ? (
          <Text variant="bodyMedium" style={{color: theme.colors.error}}>
            Failed to get characters
          </Text>
        ) : charactersStatus === RequestStatus.Loading || isLoadingSpecies ? (
          <Text variant="bodyMedium">loading...</Text>
        ) : (
          <View style={styles.cardsContainer}>
            {characters.map(character => {
              const characterSpecie = species.find(
                specie => specie.url === character.species[0],
              );
              return (
                <Card
                  characterName={character.name}
                  characterBirthYear={character.birth_year}
                  characerGender={character.gender}
                  characterSpecie={characterSpecie?.name}
                  characterUrl={character.url}
                  key={character.url}
                />
              );
            })}
          </View>
        )}
        <View style={styles.paginationWrapper}>
          <Pagination
            page={page}
            numberOfPages={Math.ceil(charactersTotalCount / 10)}
            onPageChange={onPageChange}
            numberOfItemsPerPage={10}
            totalItems={charactersTotalCount}
          />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearFavsButton: {},
  cardsContainer: {
    rowGap: 15,
  },
  paginationWrapper: {
    marginTop: 10,
  },
});

export default HomeScreen;
