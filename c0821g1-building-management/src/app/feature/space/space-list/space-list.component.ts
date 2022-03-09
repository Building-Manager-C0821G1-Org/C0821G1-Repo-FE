import {Component, OnInit} from '@angular/core';
import {SpacesList} from '../spaces-list';
import {SpaceService} from '../../../service/space/space.service';
import {NgxSpinnerService} from 'ngx-bootstrap-spinner';
import {MatDialog} from '@angular/material/dialog';
import {SpaceDeleteComponent} from '../space-delete/space-delete.component';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent implements OnInit {

  checkDelete = false;
  spaceId: number;
  spaceCodeDelete: string;
  spaceList: SpacesList[];
  page = 4;
  pageSize = 5;
  collectionSize = 0;
  checkListSearchEmpty: any;
  messageError: string;

  constructor(private spaceService: SpaceService, private spinner: NgxSpinnerService,
              private dialogDelete: MatDialog) {
  }

  ngOnInit(): void {
    this.findAllSpace();
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  findAllSpace() {
    this.spaceService.findAllSpace().subscribe(data => {
      this.messageError = '';
      this.spinner.show();
      if (data == null) {
        this.spaceList = [];
        this.collectionSize = 0;
        this.messageError = 'Không tìm thấy dữ liệu.';
      } else {
        this.spaceList = data['content'];
        this.collectionSize = data['totalElements'];
      }
    }, () => {
    }, () => {
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
    });
  }

  passData(id: number, code: string) {
    this.checkDelete = true;
    this.spaceId = id;
    this.spaceCodeDelete = code;
  }

  delete() {
    this.spaceService.deleteSpaceById(this.spaceId).subscribe(() => {
      this.findAllSpace();
      if (this.spaceList.length <= 1) {
        location.reload();
      }
    });
  }

  search(floorName: string, spaceCode: string, spaceArea: string, spaceTypeName: string, spaceStatusName: string) {
    if (floorName === '' && spaceCode === '' && spaceArea === '' && spaceTypeName === '' && spaceStatusName === '') {
      return this.findAllSpace();
    } else {
      return this.spaceService.searchSpace(floorName, spaceCode, spaceArea, spaceTypeName, spaceStatusName).subscribe(result => {
        this.messageError = '';
        this.spinner.show();
        if (result == null) {
          this.spaceList = [];
          this.collectionSize = 0;
          this.messageError = 'Không tìm thấy dữ liệu.';
        } else {
          this.spaceList = result['content'];
          this.collectionSize = result['totalElements'];
        }
      }, () => {
      }, () => {
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
      });
    }
  }

  // previousClick(index) {
  //   this.page = this.page - index;
  //   this.ngOnInit();
  // }
  //
  // findPagination(value: number) {
  //   this.page = value - 1;
  //   this.ngOnInit();
  // }
  //
  // nextClick(index) {
  //   this.page = this.page + index;
  //   console.log('next pay ' + this.page);
  //   this.ngOnInit();
  // }
  //
  // formatInput(input: HTMLInputElement) {
  //   input.value = input.value.replace(FILTER_PAG_REGEX, '');
  // }
  openDialog(spaceId: number) {
    this.spaceService.getSpaceById(spaceId).subscribe(spaceData => {
      const dialogRef = this.dialogDelete.open(SpaceDeleteComponent, {
        width: '500px',
        data: {spaceData},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(value => {
        this.ngOnInit();
      });
    });
  }
}
