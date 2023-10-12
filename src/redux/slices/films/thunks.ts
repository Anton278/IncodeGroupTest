import {createAsyncThunk} from '@reduxjs/toolkit';
import filmsService from '../../../services/films';

export const getFilms = createAsyncThunk('films/getFilms', () => {
  return filmsService.getFilms();
});
