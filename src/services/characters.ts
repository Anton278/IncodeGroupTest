import {api} from '../http/api';
import {GetCharactersRes} from '../models/responses/getCharacters';

class CharactersService {
  async getCharacters(page: number | string = 1): Promise<GetCharactersRes> {
    const res = await api.get(`/people?page=${page}`);
    return res.data;
  }
}

export default new CharactersService();
