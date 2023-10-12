import {createAsyncThunk} from '@reduxjs/toolkit';
import StarshipsService from '../../../services/starships';

export const getStarships = createAsyncThunk('starships/getStarships', () => {
  return StarshipsService.getStarships();
});
