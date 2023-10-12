import {Character} from '../Character';

export interface GetCharactersRes {
  count: number;
  next: string | null;
  previous: null | string;
  results: Character[];
}
