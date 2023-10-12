import {api} from '../http/api';
import {GetStarshipsRes} from '../models/responses/getStarships';

class StarshipsService {
  async getStarships(): Promise<GetStarshipsRes> {
    const res = await api.get('/starships');
    return res.data;
  }
}

export default new StarshipsService();
