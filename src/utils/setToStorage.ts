import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setToStorage(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
}
