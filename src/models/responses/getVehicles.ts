import {Vehicle} from '../Vehicles';

export interface GetVehiclesRes {
  count: number;
  next: string | null;
  previous: null | string;
  results: Vehicle[];
}
