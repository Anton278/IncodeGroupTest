import {createAsyncThunk} from '@reduxjs/toolkit';
import charactersService from '../../../services/characters';

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  (page: string | number | undefined) => {
    return charactersService.getCharacters(page);
  },
);
