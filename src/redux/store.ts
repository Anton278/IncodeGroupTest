import {configureStore} from '@reduxjs/toolkit';

import charactersReducer from './slices/characters/slice';
import planetsReducer from './slices/planets/slice';

export const store = configureStore({
  reducer: {characters: charactersReducer, planets: planetsReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
