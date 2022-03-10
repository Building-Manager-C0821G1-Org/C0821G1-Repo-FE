import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Spaces} from '../../../model/space/spaces';
import {SpaceService} from '../../../service/space/space.service';
import {SpaceTypeService} from '../../../service/space/space-type.service';
import {SpaceStatusService} from '../../../service/space/space-status.service';
import {FloorService} from '../../../service/floor/floor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SpacesType} from '../../../model/space/spaces-type';
import {Floors} from '../../../model/floor/floors';
import {SpacesStatus} from '../../../model/space/spaces-status';



@Component({
  selector: 'app-space-edit',
  templateUrl: './space-edit.component.html',
  styleUrls: ['./space-edit.component.css']
})
export class SpaceEditComponent implements OnInit {
  spaceEditForm = new FormGroup({
    spaceCode: new FormControl('', Validators.required),
    spaceArea: new FormControl('', [Validators.required, Validators.pattern('^(,|[0-9])*$')]),
    spacePrice: new FormControl('', [Validators.pattern('^(,|[0-9])*$')]),
    spaceManagerFee: new FormControl('', [Validators.pattern('^(,|[0-9])*$')]),
    spaceNote: new FormControl(),
    spaceImage: new FormControl(),
    spaceDeleteFlag: new FormControl(),
    spacesType: new FormControl('', Validators.required),
    spaceStatus: new FormControl('', Validators.required),
    floors: new FormControl('', Validators.required)
  });
  spaceEdit: Spaces;
  spaceTypeList: Array<SpacesType>;
  spaceStatusList: Array<SpacesStatus>;
  floorList: Array<Floors>;

  constructor(private spaceService: SpaceService,
              private spaceTypeService: SpaceTypeService,
              private spaceStatusService: SpaceStatusService,
              private floorService: FloorService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.spaceStatusService.findAll().subscribe(value => {
      this.spaceStatusList = value;
      this.spaceTypeService.findAll().subscribe(value1 => {
        this.spaceTypeList = value1;
        this.floorService.findAll().subscribe(value2 => {
          this.floorList = value2;
          const spaceEditId = this.activatedRoute.snapshot.params.id;
          this.spaceService.findByID(spaceEditId).subscribe(value3 => {
            this.spaceEdit = value3;
              // console.log(this.spaceEdit);
            this.spaceEditForm.patchValue(this.spaceEdit);
          });
        });
      });
    });



  }

  editSpace(): void {
    const editSpace = Object.assign({}, this.spaceEditForm.value);
    editSpace.spaceId = this.spaceEdit.spaceId;
    this.spaceService.editSpace(editSpace).subscribe(value => {alert('Chỉnh sửa thành công');
      },
      error => {
      }, () => {
        this.router.navigateByUrl('/spaces/list');
      });
  }
}
