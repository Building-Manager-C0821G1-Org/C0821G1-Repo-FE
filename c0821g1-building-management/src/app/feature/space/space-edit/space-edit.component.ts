import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Spaces} from "../../../model/space/spaces";
import {SpaceService} from "../../../service/space/space.service";
import {SpaceTypeService} from "../../../service/space/space-type.service";
import {SpaceStatusService} from "../../../service/space/space-status.service";
import {FloorService} from "../../../service/floor/floor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SpacesType} from "../../../model/space/spaces-type";
import {SpacesStatus} from "../../../model/space/spaces-status";
import {Floors} from "../../../model/floor/floors";

@Component({
  selector: 'app-space-edit',
  templateUrl: './space-edit.component.html',
  styleUrls: ['./space-edit.component.css']
})
export class SpaceEditComponent implements OnInit {
  spaceEditForm: FormGroup;
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
    this.spaceEditForm = new FormGroup({
      spaceCode: new FormControl('', Validators.required),
      spaceArea: new FormControl('', Validators.required),
      spacePrice: new FormControl('', Validators.pattern('^(\.|[0-9])*$')),
      spaceManagerFee: new FormControl('', Validators.pattern('^(\.|[0-9])*$')),
      spaceNote: new FormControl(),
      spaceImage: new FormControl(),
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
    const spaceEditId = this.activatedRoute.snapshot.params.id;
    this.spaceService.findByID(spaceEditId).subscribe(value => {
      this.spaceEdit = value;
      console.log(this.spaceEdit);
      this.spaceEditForm.patchValue({
        spaceCode: this.spaceEdit.spaceCode,
        spaceArea: this.spaceEdit.spaceArea,
        spacePrice: this.spaceEdit.spacePrice,
        spaceManagerFee: this.spaceEdit.spaceManagerFee,
        spaceNote: this.spaceEdit.spaceNote,
        spaceImage: this.spaceEdit.spaceImage,
        spaceDeleteFlag: this.spaceEdit.spaceDeleteFlag,
        spacesType: this.spaceEdit.spacesType.spaceTypeName,
        spaceStatus: this.spaceEdit.spaceStatus.spacerStatusName,
        floors: this.spaceEdit.floors.floorName,
      });
    });
    console.log(spaceEditId);

  }
  editSpace(): void{
    const editSpace = Object.assign({}, this.spaceEditForm.value);
    editSpace.spaceId = this.spaceEdit.spaceId;
    this.spaceService.editSpace(editSpace).subscribe(value => { },
      error => {}, () => {
          this.router.navigateByUrl('/space/list');
      });
  }
}
