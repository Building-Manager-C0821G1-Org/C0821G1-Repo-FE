import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {SpacesType} from '../../../model/space/spaces-type';
import {SpaceService} from '../../../service/space/space.service';
import {SpaceTypeService} from '../../../service/space/space-type.service';
import {SpaceStatusService} from '../../../service/space/space-status.service';
import {Router} from '@angular/router';
import {FloorService} from '../../../service/floor/floor.service';
import {Floors} from '../../../model/floor/floors';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {SpacesStatus} from '../spaces-status';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-space-create',
  templateUrl: './space-create.component.html',
  styleUrls: ['./space-create.component.css']
})
export class SpaceCreateComponent implements OnInit {
  spaceForm = new FormGroup({
    spaceCode: new FormControl('', Validators.required),
    spaceArea: new FormControl('', [Validators.required, Validators.pattern('^(,|[0-9])*$')]),
    spacePrice: new FormControl('', [Validators.pattern('^(,|[0-9])*$')]),
    spaceManagerFee: new FormControl('', [Validators.pattern('^(,|[0-9])*$')]),
    spaceNote: new FormControl(''),
    spaceImage: new FormControl(''),
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
  spaceImage: FormArray;
  spaceTypeList: Array<SpacesType>;
  spaceStatusList: Array<SpacesStatus>;
  floorList: Array<Floors>;
  urlImage = '';
  selectedImage: any = null;
  validateErrorCode: string;
  checkCode: boolean;
  constructor(private spaceService: SpaceService,
              private spaceTypeService: SpaceTypeService,
              private spaceStatusService: SpaceStatusService,
              private floorService: FloorService,
              private router: Router,
              @Inject(AngularFireStorage) private angularFireStorage: AngularFireStorage
  ) {this.checkCode = false;}

  ngOnInit(): void {
    this.spaceStatusService.findAll().subscribe(value => {
      this.spaceStatusList = value;
      this.spaceTypeService.findAll().subscribe(value1 => {
        this.spaceTypeList = value1;
        this.floorService.findAll().subscribe(value2 => {
          this.floorList = value2;
        });
      });
    });
  }

  saveNewSpace(): void {
    const name = this.selectedImage.name;
    const fileRef = this.angularFireStorage.ref(name);
    this.angularFireStorage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL()
          .subscribe((url) => {
            console.log(url);
            this.spaceForm.patchValue({spaceImage: url});
            console.log(this.spaceForm.value);
            const newSpace = Object.assign({}, this.spaceForm.value);
            this.spaceService.saveNewSpace(newSpace).subscribe(value => {
                this.callToast();
              },
              error => {
              this.checkCode = true;
                // console.log(error);
                // this.validateErrorCode = error.error.code;
                // alert(this.validateErrorCode);
              },
              () => {
                this.router.navigateByUrl('/spaces/list');
              });
          });
      })).subscribe();
  }

  upload(event) {
    this.selectedImage = event.target.files[0];
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        this.urlImage = event.target.result;
        // console.log(event.target.files[0]);
      };
    }
    // const newImage = new FormGroup({
    //   image: new FormControl()
    // });
  }

  uploadImage() {
  }
  private callToast() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Thêm mới mặt bằng thành công!',
      showConfirmButton: false,
      timer: 2000
    });
  }
}
