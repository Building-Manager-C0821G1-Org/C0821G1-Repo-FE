import {Component, Inject, OnInit} from '@angular/core';
import {FloorService} from '../../../service/floor/floor.service';
import {Floors} from '../../../model/floors/floors';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-floors-delete',
  templateUrl: './floors-delete.component.html',
  styleUrls: ['./floors-delete.component.css']
})
export class FloorsDeleteComponent implements OnInit {
  floor: Floors;
  private subscription: Subscription;
  constructor(private floorService: FloorService,
              public dialogRef: MatDialogRef<FloorsDeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.floor = this.data.value;
  }
  deleteFloorsById() {
    this.subscription = this.floorService.deleteFlagFloors(this.floor.floorId).subscribe(value => {
        this.callToast();
        this.dialogRef.close();
      }
    );
  }

  onNoClick(){
    this.dialogRef.close();
  }

  private callToast() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Xóa tầng lầu thành công!😍😍😍',
      showConfirmButton: false,
      timer: 2000
    });
  }
}
