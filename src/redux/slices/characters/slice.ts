import {createSlice} from '@reduxjs/toolkit';
import {InitState} from './types';
import {getCharacters} from './thunks';
import {RequestStatus} from '../../../models/RequestStatus';

const initialState: InitState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  status: RequestStatus.Loading,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCharacters.pending, state => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      return {...action.payload, status: RequestStatus.Success};
    });
    builder.addCase(getCharacters.rejected, state => {
      state.status = RequestStatus.Error;
    });
  },
});

export default charactersSlice.reducer;
