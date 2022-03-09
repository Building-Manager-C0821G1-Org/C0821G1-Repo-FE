import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {SpacesList} from '../spaces-list';
import {Subscription} from 'rxjs';
import {SpaceService} from '../../../service/space/space.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-space-delete',
  templateUrl: './space-delete.component.html',
  styleUrls: ['./space-delete.component.css']
})
export class SpaceDeleteComponent implements OnInit {

  spaceList: SpacesList;
  private subscription: Subscription;

  constructor(private spaceService: SpaceService,
              public dialogRef: MatDialogRef<SpaceDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.spaceList = this.data.spaceData;
  }

  deleteSpaceById() {
    this.subscription = this.spaceService.deleteSpaceById(this.spaceList.spaceId).subscribe(value => {
        this.callToast();
        this.dialogRef.close();
      }
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }

  private callToast() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Xóa mặt bằng thành công!😍😍😍',
      showConfirmButton: false,
      timer: 2000
    });
  }
}
