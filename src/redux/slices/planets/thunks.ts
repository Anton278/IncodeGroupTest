import {createAsyncThunk} from '@reduxjs/toolkit';
import planetsService from '../../../services/planets';

export const getPlanets = createAsyncThunk('planets/getPlanets', () => {
  return planetsService.getPlanets();
});
