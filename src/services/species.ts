import {api} from '../http/api';
import {GetSpeciesRes} from '../models/responses/getSpecies';

class SpeciesService {
  async getSpecies(): Promise<GetSpeciesRes> {
    const res = await api.get('/species');
    return res.data;
  }
}

export default new SpeciesService();
