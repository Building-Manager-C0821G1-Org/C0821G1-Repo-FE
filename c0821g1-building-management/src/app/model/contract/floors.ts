import {FloorsStatus} from './floors-status';
import {FloorsType} from './floors-type';

export interface Floors {
  floorId ?: number;
  floorCode ?: string;
  floorName ?: string;
  floorArea ?: string;
  floorCapacity ?: string;
  floorDeleteFlag ?: string;
  floorStatus ?: FloorsStatus;
  floorType ?: FloorsType;
}
