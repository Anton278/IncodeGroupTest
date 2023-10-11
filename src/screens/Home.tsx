import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';

import PageContainer from '../components/PageContainer';
import Favourites from '../components/Favourites';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

function HomeScreen() {
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
        <View style={styles.cardsContainer}>
          <Card
            characterName="Luke Skywalker"
            characterBirthYear="19 BBY"
            characerGender="male"
            characterSpecies={[]}
            characterUrl=""
          />
          <Card
            characterName="Luke Skywalker"
            characterBirthYear="19 BBY"
            characerGender="male"
            characterSpecies={[]}
            characterUrl=""
          />
          <Card
            characterName="Luke Skywalker"
            characterBirthYear="19 BBY"
            characerGender="male"
            characterSpecies={[]}
            characterUrl=""
          />
          <Card
            characterName="Luke Skywalker"
            characterBirthYear="19 BBY"
            characerGender="male"
            characterSpecies={[]}
            characterUrl=""
          />
        </View>
        <View style={styles.paginationWrapper}>
          <Pagination
            page={1}
            numberOfPages={10}
            onPageChange={() => {}}
            numberOfItemsPerPage={10}
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
