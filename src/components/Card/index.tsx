import {useNavigation} from '@react-navigation/native';
import {Card as RNPCard, Text, Button, IconButton} from 'react-native-paper';

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
        <IconButton mode="contained" icon="heart" iconColor={'#fff'} />
      </RNPCard.Actions>
    </RNPCard>
  );
}

export default Card;
