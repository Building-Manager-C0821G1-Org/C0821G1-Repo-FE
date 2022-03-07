import {Component, OnInit} from '@angular/core';
import {Floors} from '../../../model/floors/floors';
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
  // floorsDeleteFlag: Floors;
  // floorsDeleteFlagList: Floors[] = [];

  constructor(private floorService: FloorService
  ) {
    this.floorService.findAll().subscribe(value => {
      for (const floors of value) {
        if (floors.floorDeleteFlag === 1) {
          this.floorsList.push(floors);
        }
      }
    }, error => {
      console.log('error constructor');
    }, () => {
      console.log('complete constructor');
    });
  }

  ngOnInit(): void {
  }
  /**
   * Created: DuyNP
   * Method get Floors
   */
  getFloors(id: number, name: string) {
    this.floorId = Number(id);
    this.floorName = name;
  }

  /**
   * Created: DuyNP
   * Method delete floors
   */

  deleteFloors() {
    this.floorService.deleteFlagFloors(this.floorId).subscribe(value => {
      //   this.floorService.deleteFloors(this.floorId).subscribe(value => {
    }, error => {
    }, () => {
      this.floorService.findById(this.floorId).subscribe(value => {
        // this.floorsList.splice(this.floorsList.indexOf(value), 1);
        // @ts-ignore
        this.floorsList.length = [];
        this.floorService.findAll().subscribe(value1 => {
          for (const floors of value1) {
            if (floors.floorDeleteFlag === 1) {
              this.floorsList.push(floors);
            }
          }
        }, error => {
          console.log('error delete');
        }, () => {
          console.log('complete delete');
        });
        console.log(value);
        console.log(this.floorsList);
      });
    });
  }

  // findFloorsById() {
  //   this.floorService.findById(this.floorId).subscribe(value => {
  //     this.floorsDeleteFlag = value;
  //   });
  // }
}
