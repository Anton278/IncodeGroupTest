import {configureStore} from '@reduxjs/toolkit';

import charactersReducer from './slices/characters/slice';
import planetsReducer from './slices/planets/slice';
import filmsReducer from './slices/films/slice';
import speciesReducer from './slices/species/slice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    planets: planetsReducer,
    films: filmsReducer,
    species: speciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
