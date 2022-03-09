import {Component, OnInit} from '@angular/core';
import {Floors} from '../../../model/floors/floors';
import {FloorService} from '../../../service/floor/floor.service';
import {FloorsDeleteComponent} from '../floors-delete/floors-delete.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-floors-list',
  templateUrl: './floors-list.component.html',
  styleUrls: ['./floors-list.component.css']
})
export class FloorsListComponent implements OnInit {
  floorsList: Floors[] = [];

  constructor(private floorService: FloorService, private dialogDelete: MatDialog) {
  }

  ngOnInit(): void {
    this.floorService.findAll().subscribe(value => {
      this.floorsList = value;
    }, error => {
      console.log('error Init');
    }, () => {
      console.log('complete Init');
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
    });
  }
}
