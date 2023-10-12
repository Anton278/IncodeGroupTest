import {Planet} from '../Planet';

export interface GetPlanetsRes {
  count: number;
  next: string | null;
  previous: null | string;
  results: Planet[];
}
