import {Injectable} from '@angular/core';
import {Space} from '../../model/space';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor() {
  }

  spaces: Space[] = [
    {
      id: 1,
      name: 'MT-0001'
    },
    {
      id: 2,
      name: 'MB-002'
    },
    {
      id: 3,
      name: 'MB-003'
    },
    {
      id: 4,
      name: 'MB-004'
    },
  ];
}
