import {FloorsType} from './floors-type';
import {FloorsStatus} from './floors-status';

export interface Floors {
  floorId: number;
  floorCode: string;
  floorName: string;
  floorArea: number;
  floorCapacity: number;
  floorDeleteFlag: number;
  floorsType: FloorsType;
  floorsStatus: FloorsStatus;
}
