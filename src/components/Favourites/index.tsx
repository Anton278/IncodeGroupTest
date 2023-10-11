import {View, StyleSheet} from 'react-native';
import {Text, Surface} from 'react-native-paper';

function Favourites() {
  return (
    <View style={styles.favBoxes}>
      <Surface style={styles.favBox}>
        <Text variant="titleLarge">0</Text>
        <Text variant="bodyMedium">Female favs</Text>
      </Surface>
      <Surface style={styles.favBox}>
        <Text variant="titleLarge">0</Text>
        <Text variant="bodyMedium">Male favs</Text>
      </Surface>
      <Surface style={styles.favBox}>
        <Text variant="titleLarge">0</Text>
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
