import { Component, OnInit } from '@angular/core';
import {Spaces} from '../spaces';
import {SpaceService} from '../../../service/space/space.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent implements OnInit {

  checkDelete = false;
  spaceId: number;
  spaceCode: string;
  spaceList: Spaces[];

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.findAllSpace();
  }

  findAllSpace(){
    this.spaceService.findAllSpace().subscribe(space => {
      this.spaceList = space;
    } );
  }

  passData(id: number, code: string) {
    this.checkDelete = true;
    this.spaceId = id;
    this.spaceCode = code;
  }

  delete() {
    this.spaceService.deleteSpaceById(this.spaceId).subscribe(() => {
      this.callToast();
      this.findAllSpace();
      if (this.spaceList.length <= 1){
        location.reload();
      }
    });
  }

  private callToast() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Xóa mặt bằng thành công!😍😍😍',
      showConfirmButton: false,
      timer: 2000
    });
  }
}
