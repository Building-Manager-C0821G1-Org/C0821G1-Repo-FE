import {Component, OnInit} from '@angular/core';
import {Floors} from '../../model/floors/floors';
import {FloorService} from '../../service/floor/floor.service';
import {MatDialog} from '@angular/material/dialog';
import {FloorsDeleteComponent} from '../../feature/floors/floors-delete/floors-delete.component';
import Swal from "sweetalert2";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  floorsList: Floors[] = [];
  constructor(private floorService: FloorService, private dialogDelete: MatDialog) {
  }
  ngOnInit(): void {
    this.floorService.findAll().subscribe(value => {
      this.floorsList = value;
    }, error => {
      this.callToastFailList();
    }, () => {
      // this.callToastFailList();
    });
  }
  openDialog(floorId: number) {
    this.floorService.findById(floorId).subscribe(value => {
        const dialogRef = this.dialogDelete.open(FloorsDeleteComponent, {
          width: '500px',
          data: {value},
          disableClose: true
        });
        dialogRef.afterClosed().subscribe(value1 => {
          this.ngOnInit();
        });
      },
      error => {
        this.callToastFail();
      });
  }
  private callToastFail() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Không tìm thấy tầng lầu hoặc tầng lầu đã bị xóa 🙄!',
      showConfirmButton: false,
      timer: 2000
    });
  }
  private callToastFailList() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Không tìm thấy dữ liệu 🤷‍♂️🤷‍♂️🤷‍♂ !',
      showConfirmButton: false,
      timer: 2000
    });
  }
}
