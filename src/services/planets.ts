import {api} from '../http/api';
import {GetPlanetsRes} from '../models/responses/getPlanets';

class PlanetsService {
  async getPlanets(): Promise<GetPlanetsRes> {
    const res = await api.get('/planets');
    return res.data;
  }
}

export default new PlanetsService();
