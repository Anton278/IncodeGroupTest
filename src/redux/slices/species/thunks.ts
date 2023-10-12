import {createAsyncThunk} from '@reduxjs/toolkit';
import SpeciesService from '../../../services/Species';

export const getSpecies = createAsyncThunk('species/getSpecies', () => {
  return SpeciesService.getSpecies();
});
