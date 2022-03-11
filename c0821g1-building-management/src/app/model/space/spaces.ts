import {SpacesType} from './spaces-type';
import {SpacesStatus} from '../../feature/space/spaces-status';
import {Floors} from '../floor/floors';

export interface Spaces {
  spaceId: number;
  spaceCode: string;
  spaceArea: string;
  spacePrice: string;
  spaceManagerFee: string;
  spaceNote: string;
  spaceImage: string;
  spaceDeleteFlag: string;
  spacesType: SpacesType;
  spaceStatus: SpacesStatus;
  floors: Floors;
}
