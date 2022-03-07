import {SpacesType} from './spaces-type';
import {SpacesStatus} from './spaces-status';
import {Floors} from './floors';

export interface Spaces {
  spaceId?: number;
  spaceCode?: string;
  spaceArea?: string;
  spacePrice?: string;
  spaceManagerFee?: string;
  spaceNote?: string;
  spaceImage?: string;
  spaceDeleteFlag?: string;
  spaceType?: SpacesType;
  spaceStatus?: SpacesStatus;
  floorName?: Floors;
}
