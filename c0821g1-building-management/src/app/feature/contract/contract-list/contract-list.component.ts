import {Component, OnInit} from '@angular/core';
import {Contract} from '../../../model/contract';
import {ContractService} from '../../../service/contract/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];

  constructor(private contractService: ContractService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.contractService.getAll().subscribe(c => {
      this.contracts = c;
    });
  }

}
