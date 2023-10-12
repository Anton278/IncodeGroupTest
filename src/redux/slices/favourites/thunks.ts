import {createAsyncThunk} from '@reduxjs/toolkit';
import {FAVOURITES_KEY} from '../../../utils/const';
import {Favourite} from '../../../models/Favourite';
import {getFromStorage} from '../../../utils/getFromStorage';
import {setToStorage} from '../../../utils/setToStorage';

export const clearFavourites = createAsyncThunk(
  'favourites/clearFavourite',
  async () => {
    await setToStorage(FAVOURITES_KEY, []);
    return [];
  },
);

export const addFavourite = createAsyncThunk(
  'favourites/addFavourite',
  async (favourite: Favourite, {rejectWithValue}) => {
    const favourites = await getFromStorage<Favourite[]>(FAVOURITES_KEY);
    if (!favourites) {
      return rejectWithValue("Favourites don't exist in AsyncStorage");
    }

    await setToStorage(FAVOURITES_KEY, [...favourites, favourite]);

    return favourite;
  },
);

export const removeFavourite = createAsyncThunk(
  'favourites/removeFavourite',
  async (id: string, {rejectWithValue}) => {
    const favourites = await getFromStorage<Favourite[]>(FAVOURITES_KEY);

    if (!favourites) {
      return rejectWithValue("Favourites don't exist in AsyncStorage");
    }

    const updatedFavourites: Favourite[] = favourites.filter(
      favourite => favourite.id !== id,
    );

    await setToStorage(FAVOURITES_KEY, updatedFavourites);

    return updatedFavourites;
  },
);
