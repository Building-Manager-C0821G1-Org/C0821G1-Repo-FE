
import {Injectable} from '@angular/core';
import {Spaces} from '../../model/contract/spaces';

class Space {
}

@Injectable({
  providedIn: 'root'
})
export class SpaceService {


  constructor() {
  }

  spaces: Spaces[] = [
  ];
}
