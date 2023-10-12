import {Specie} from '../Specie';

export interface GetSpeciesRes {
  count: number;
  next: string | null;
  previous: null | string;
  results: Specie[];
}
