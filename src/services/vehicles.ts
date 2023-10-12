import {api} from '../http/api';
import {GetVehiclesRes} from '../models/responses/getVehicles';

class VehiclesService {
  async getVehicles(): Promise<GetVehiclesRes> {
    const res = await api.get('/vehicles');
    return res.data;
  }
}

export default new VehiclesService();
