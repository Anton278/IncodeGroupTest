import {Film} from '../Film';

export interface GetFilmsRes {
  count: number;
  next: string | null;
  previous: null | string;
  results: Film[];
}
