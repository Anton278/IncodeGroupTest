import {api} from '../http/api';
import {GetFilmsRes} from '../models/responses/getFilms';

class FilmsService {
  async getFilms(): Promise<GetFilmsRes> {
    const res = await api.get('/films');
    return res.data;
  }
}

export default new FilmsService();
