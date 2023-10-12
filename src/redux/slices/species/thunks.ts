import {createAsyncThunk} from '@reduxjs/toolkit';
import speciesService from '../../../services/species';

export const getSpecies = createAsyncThunk('species/getSpecies', () => {
  return speciesService.getSpecies();
});
