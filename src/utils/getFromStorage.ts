import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getFromStorage<ReturnValue>(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? (JSON.parse(value) as ReturnValue) : null;
  } catch (e) {}
}
