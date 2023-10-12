import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Film} from '../../../models/Film';

export const getFilm = createAsyncThunk(
  'films/getFilm',
  async (url: string) => {
    const res = await axios.get<Film>(url);
    return res.data;
  },
);
