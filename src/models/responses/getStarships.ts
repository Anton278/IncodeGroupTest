import {Starship} from '../Starship';

export interface GetStarshipsRes {
  count: number;
  next: string | null;
  previous: null | string;
  results: Starship[];
}
