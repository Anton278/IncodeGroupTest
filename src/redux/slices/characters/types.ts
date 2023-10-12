import {RequestStatus} from '../../../models/RequestStatus';
import {GetCharactersRes} from '../../../models/responses/getCharacters';

export interface InitState extends GetCharactersRes {
  status: RequestStatus;
}
