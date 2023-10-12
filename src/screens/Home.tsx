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

function HomeScreen() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const {count} = useAppSelector(state => state.characters);
  const characters = useAppSelector(state => state.characters.results);
  const charactersStatus = useAppSelector(state => state.characters.status);
  const species = useAppSelector(state => state.species.species);
  const [isLoadingSpecies, setIsLoadingSpecies] = useState(true);

  const [page, setPage] = useState(0);

  function onPageChange(num: number) {
    dispatch(getCharacters(num + 1));
    setPage(num);
  }

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  useEffect(() => {
    if (charactersStatus !== RequestStatus.Success) {
      return;
    }

    async function getSpecies() {
      await Promise.all(
        characters.map(character =>
          character.species.map(characterSpecie => {
            const isExist = species.find(
              specie => specie.url === characterSpecie,
            );
            if (!isExist) {
              dispatch(getSpecie(characterSpecie));
            }
          }),
        ),
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
            onPress={() => console.log('cleared favs')}
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
              const characterSpecies = character.species.map(
                characterSpecie => {
                  const specie = species.find(
                    specie => specie.url === characterSpecie,
                  );
                  return specie ? specie.name : characterSpecie;
                },
              );
              return (
                <Card
                  characterName={character.name}
                  characterBirthYear={character.birth_year}
                  characerGender={character.gender}
                  characterSpecies={characterSpecies}
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
            numberOfPages={Math.ceil(count / 10)}
            onPageChange={onPageChange}
            numberOfItemsPerPage={10}
            totalItems={count}
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
