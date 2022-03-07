import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {SpacesType} from '../../../model/space/spaces-type';
import {SpacesStatus} from '../../../model/space/spaces-status';
import {SpaceService} from '../../../service/space/space.service';
import {SpaceTypeService} from '../../../service/space/space-type.service';
import {SpaceStatusService} from '../../../service/space/space-status.service';
import {Router} from '@angular/router';
import {FloorService} from '../../../service/floor/floor.service';
import {Floors} from '../../../model/floor/floors';

@Component({
  selector: 'app-space-create',
  templateUrl: './space-create.component.html',
  styleUrls: ['./space-create.component.css']
})
export class SpaceCreateComponent implements OnInit {
  spaceForm: FormGroup;
  spaceTypeList: Array<SpacesType>;
  spaceStatusList: Array<SpacesStatus>;
  floorList: Array<Floors>;

  constructor(private spaceService: SpaceService,
              private spaceTypeService: SpaceTypeService,
              private spaceStatusService: SpaceStatusService,
              private floorService: FloorService,
              private router: Router) {
    this.spaceForm = new FormGroup({
      spaceCode: new FormControl('', Validators.required),
      spaceArea: new FormControl('', Validators.required),
      spacePrice: new FormControl('', Validators.pattern('^(\.|[0-9])*$')),
      spaceManagerFee: new FormControl('', Validators.pattern('^(\.|[0-9])*$')),
      spaceNote: new FormControl(),
      spaceImage: new FormControl(),
      // spaceImage: new FormArray([
      //   new FormGroup({
      //     image: new FormControl()
      //   })
      // ]),
      spaceDeleteFlag: new FormControl(),
      spacesType: new FormControl('', Validators.required),
      spaceStatus: new FormControl('', Validators.required),
      floors: new FormControl('', Validators.required)
    });
    this.spaceStatusService.findAll().subscribe(value => {
      this.spaceStatusList = value;
    });
    this.spaceTypeService.findAll().subscribe(value => {
      this.spaceTypeList = value;
    });
    this.floorService.findAll().subscribe(value => {
      this.floorList = value;
    });
  }

  ngOnInit(): void {
  }

  saveNewSpace(): void {
    const newSpace = Object.assign({}, this.spaceForm.value);
    this.spaceService.saveNewSpace(newSpace).subscribe(value => {
      },
      error => {
      },
      () => {
        this.router.navigateByUrl('/space/list');
      });
  }
  upload($event){
  }
  uploadImage(){}
}
