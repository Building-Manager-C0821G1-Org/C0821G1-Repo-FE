import { Component, OnInit } from '@angular/core';
import {Floors} from '../../../model/floors/floors';
import {Router} from '@angular/router';
import {FloorService} from '../../../service/floor/floor.service';

@Component({
  selector: 'app-floors-list',
  templateUrl: './floors-list.component.html',
  styleUrls: ['./floors-list.component.css']
})
export class FloorsListComponent implements OnInit {

  floorId: number;
  floorName: string;
  floorsList: Floors[] = [];

  constructor(private floorService: FloorService
  ) {
    this.floorService.findAll().subscribe(value => {
      this.floorsList = value;
      console.log(this.floorsList);
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {
  }

  delete(id: number, name: string) {
    this.floorId = Number(id);
    this.floorName = name;
  }
  deleteFloors() {
    this.floorService.deleteFlagFloors(this.floorId).subscribe(value => {
    //   this.floorService.deleteFloors(this.floorId).subscribe(value => {
    }, error => {
    }, () => {
      console.log(this.floorId);
      this.floorService.findAll().subscribe(value => {
        console.log(value);
        this.floorsList = value;
      }, error => {
      }, () => {
      });
    });
  }
}
