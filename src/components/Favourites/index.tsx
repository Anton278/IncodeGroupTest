import {View, StyleSheet} from 'react-native';
import {Text, Surface} from 'react-native-paper';
import {useAppSelector} from '../../hooks/useAppSelector';

function Favourites() {
  const favourites = useAppSelector(state => state.favourites.favourites);

  const femaleFavsCount = favourites.filter(
    favourite => favourite.gender === 'female',
  ).length;
  const maleFavsCount = favourites.filter(
    favourite => favourite.gender === 'male',
  ).length;
  const otherFavsCount = favourites.filter(
    favourite => favourite.gender === 'n/a',
  ).length;

  return (
    <View style={styles.favBoxes}>
      <Surface style={styles.favBox}>
        <Text variant="titleLarge">{femaleFavsCount}</Text>
        <Text variant="bodyMedium">Female favs</Text>
      </Surface>
      <Surface style={styles.favBox}>
        <Text variant="titleLarge">{maleFavsCount}</Text>
        <Text variant="bodyMedium">Male favs</Text>
      </Surface>
      <Surface style={styles.favBox}>
        <Text variant="titleLarge">{otherFavsCount}</Text>
        <Text variant="bodyMedium">Others</Text>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  favBoxes: {flexDirection: 'row', columnGap: 20, marginVertical: 20},
  favBox: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 5,
  },
});

export default Favourites;
