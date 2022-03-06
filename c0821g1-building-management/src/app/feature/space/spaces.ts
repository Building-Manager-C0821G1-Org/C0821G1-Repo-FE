import {SpacesType} from './spaces-type';
import {Floor} from './floor';

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
  floorName?: Floor;
}
