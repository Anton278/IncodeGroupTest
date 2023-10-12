import {configureStore} from '@reduxjs/toolkit';

import charactersReducer from './slices/characters/slice';
import planetsReducer from './slices/planets/slice';
import filmsReducer from './slices/films/slice';
import speciesReducer from './slices/species/slice';
import vehiclesReducer from './slices/vehicles/slice';
import starshipsReducer from './slices/starships/slice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    planets: planetsReducer,
    films: filmsReducer,
    species: speciesReducer,
    vehicles: vehiclesReducer,
    starships: starshipsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
