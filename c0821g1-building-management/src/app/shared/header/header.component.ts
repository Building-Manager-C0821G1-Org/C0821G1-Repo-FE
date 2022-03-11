import {TokenStorageService} from '../../service/security/token-storage.service';
import { Component, OnInit } from '@angular/core';
// import {TokenStorageService} from '../../service/security/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  role: string;
  urlImg: string;
  isLoggedIn: boolean;
  idCustomer: string;


  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loadHeader();
  }

  loadHeader(): void {
    if (this.tokenStorageService.getUser()) {
      this.username = this.tokenStorageService.getUser().username;
      this.urlImg = this.tokenStorageService.getUser().urlImg;
      // this.isLoggedIn = this.tokenStorageService.getUser().idEmployee;
      this.isLoggedIn = true;
      this.role = this.tokenStorageService.getUser().roles[0];
    } else {
      this.role = null;
      this.username = null;
      this.urlImg = null;
      this.idCustomer = null;
    }
    this.isLoggedIn = this.username != null;
  }

  logout() {
    this.tokenStorageService.signOut();
    this.loadHeader();
    this.router.navigate(['/home']);
  }
  // constructor(
  //   private tokenStorageService: TokenStorageService,
  //   private router: Router) {
  // }
  // constructor() { }
  // ngOnInit(): void {
  //   // this.loadHeader();
  // }
  // // loadHeader(): void {
  // //   if (this.tokenStorageService.getUser()) {
  // //     this.username = this.tokenStorageService.getUser().username;
  // //     this.urlImg = this.tokenStorageService.getUser().urlImg;
  // //     // this.isLoggedIn = this.tokenStorageService.getUser().idEmployee;
  // //     this.isLoggedIn = true;
  // //     this.role = this.tokenStorageService.getUser().roles[0];
  // //   } else {
  // //     this.role = null;
  // //     this.username = null;
  // //     this.urlImg = null;
  // //     this.idCustomer = null;
  // //   }
  // //   this.isLoggedIn = this.username != null;
  // // }
  // //
  // // logout() {
  // //   this.tokenStorageService.signOut();
  // //   this.loadHeader();
  // //   this.router.navigate(['/home']);
  // // }
}
