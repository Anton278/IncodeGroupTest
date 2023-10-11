import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  PaperProvider,
  Surface,
  Card,
  Text,
  Button,
  IconButton,
  DataTable,
} from 'react-native-paper';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={{
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}>
            <View style={styles.topBar}>
              <Text variant="headlineMedium">Favourites</Text>
              <Button
                mode="outlined"
                onPress={() => console.log('cleared favs')}
                style={styles.clearFavsButton}>
                Clear favourites
              </Button>
            </View>
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
            <View style={styles.cardsContainer}>
              <Card style={{backgroundColor: '#fff'}}>
                <Card.Title title="Luke Skywalker" />
                <Card.Content>
                  <Text variant="bodyMedium">Birth year: 19BBY</Text>
                  <Text variant="bodyMedium">Gender: male</Text>
                  <Text variant="bodyMedium">Species: -</Text>
                </Card.Content>
                <Card.Actions>
                  <Button mode="outlined">Read more</Button>
                  <IconButton
                    mode="contained"
                    icon="heart"
                    iconColor={'#fff'}
                  />
                </Card.Actions>
              </Card>
              <Card style={{backgroundColor: '#fff'}}>
                <Card.Title title="Luke Skywalker" />
                <Card.Content>
                  <Text variant="bodyMedium">Birth year: 19BBY</Text>
                  <Text variant="bodyMedium">Gender: male</Text>
                  <Text variant="bodyMedium">Species: -</Text>
                </Card.Content>
                <Card.Actions>
                  <Button mode="outlined">Read more</Button>
                  <IconButton
                    mode="contained"
                    icon="heart"
                    iconColor={'#fff'}
                  />
                </Card.Actions>
              </Card>
              <Card style={{backgroundColor: '#fff'}}>
                <Card.Title title="Luke Skywalker" />
                <Card.Content>
                  <Text variant="bodyMedium">Birth year: 19BBY</Text>
                  <Text variant="bodyMedium">Gender: male</Text>
                  <Text variant="bodyMedium">Species: -</Text>
                </Card.Content>
                <Card.Actions>
                  <Button mode="outlined">Read more</Button>
                  <IconButton
                    mode="contained"
                    icon="heart"
                    iconColor={'#fff'}
                  />
                </Card.Actions>
              </Card>
              <Card style={{backgroundColor: '#fff'}}>
                <Card.Title title="Luke Skywalker" />
                <Card.Content>
                  <Text variant="bodyMedium">Birth year: 19BBY</Text>
                  <Text variant="bodyMedium">Gender: male</Text>
                  <Text variant="bodyMedium">Species: -</Text>
                </Card.Content>
                <Card.Actions>
                  <Button mode="outlined">Read more</Button>
                  <IconButton
                    mode="contained"
                    icon="heart"
                    iconColor={'#fff'}
                  />
                </Card.Actions>
              </Card>
            </View>
            <View style={styles.paginationWrapper}>
              <DataTable.Pagination
                page={1}
                numberOfPages={10}
                onPageChange={() => {}}
                label="1-10 of 10"
                showFastPaginationControls
                numberOfItemsPerPage={10}
                // change items per page
                selectPageDropdownLabel={'Characters per page'}
                onItemsPerPageChange={() => {}}
                numberOfItemsPerPageList={[10, 20, 50]}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f5f3',

    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearFavsButton: {},
  favBoxes: {flexDirection: 'row', columnGap: 20, marginVertical: 20},
  favBox: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flex: 1,
    borderRadius: 5,
  },
  cardsContainer: {
    rowGap: 15,
  },
  paginationWrapper: {
    marginTop: 10,
  },
});

export default App;
