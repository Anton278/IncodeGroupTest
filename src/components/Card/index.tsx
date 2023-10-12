import {useNavigation} from '@react-navigation/native';
import {
  Card as RNPCard,
  Text,
  Button,
  IconButton,
  useTheme,
} from 'react-native-paper';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {
  addFavourite,
  removeFavourite,
} from '../../redux/slices/favourites/thunks';

type CardProps = {
  characterName: string;
  characterBirthYear: string;
  characerGender: string;
  characterSpecies: string[];
  characterUrl: string;
};

function Card(props: CardProps) {
  const {
    characterName,
    characterBirthYear,
    characerGender,
    characterSpecies,
    characterUrl,
  } = props;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const favourites = useAppSelector(state => state.favourites.favourites);
  const [isFavourite, setIsFavourite] = useState(false);

  function onFavouritePress() {
    const favourite = favourites.find(
      favourite => favourite.id === characterUrl,
    );

    if (!favourite) {
      dispatch(addFavourite({id: characterUrl, gender: characerGender}));
    } else {
      dispatch(removeFavourite(characterUrl));
    }
  }

  useEffect(() => {
    const favourite = favourites.find(
      favourite => favourite.id === characterUrl,
    );
    if (favourite) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [favourites]);

  return (
    <RNPCard style={{backgroundColor: '#fff'}}>
      <RNPCard.Title title={characterName} />
      <RNPCard.Content>
        <Text variant="bodyMedium">Birth year: {characterBirthYear}</Text>
        <Text variant="bodyMedium">Gender: {characerGender}</Text>
        <Text variant="bodyMedium">
          Species: {characterSpecies.length ? characterSpecies : '-'}
        </Text>
      </RNPCard.Content>
      <RNPCard.Actions>
        <Button
          mode="outlined"
          onPress={() => {
            // @ts-expect-error
            navigation.navigate('Character', {url: characterUrl});
          }}>
          Read more
        </Button>
        <IconButton
          mode="contained"
          icon="heart"
          iconColor={isFavourite ? theme.colors.error : '#fff'}
          onPress={onFavouritePress}
        />
      </RNPCard.Actions>
    </RNPCard>
  );
}

export default Card;
