import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../service/security/token-storage.service';
import {Router} from '@angular/router';
import {SecurityService} from '../../../service/security/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  username: string;
  roles: string[] = [];
  errorMessage = '';
  isLoggedIn: boolean;
  urlImg: string;
  idCustomer: null;

  constructor(private fb: FormBuilder,
              private tokenStorageService: TokenStorageService,
              private securityService: SecurityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginFrom = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember_me: false
    });
    console.log(this.loadRemberInfo());
    if (this.loadRemberInfo() !== null) {
      this.loginFrom.controls.username.setValue(this.tokenStorageService.getUser().username);
      console.log(this.loginFrom.controls.username.value);
    }
    // if (this.tokenStorageService.getUser()) {
    //   this.roles = this.tokenStorageService.getUser().roles;
    //   this.username = this.tokenStorageService.getUser().username;
    // }
  }

  onSubmit() {
    this.securityService.login(this.loginFrom.value).subscribe(data => {
      console.log(data.jwtToken);
      if (this.loginFrom.value.remember_me === true) {
        this.tokenStorageService.saveUserLocal(data);
        this.tokenStorageService.saveTokenLocal(data.jwtToken);
      } else if (this.loginFrom.value.remember_me === false) {
        this.tokenStorageService.saveUserSession(data);
        this.tokenStorageService.saveTokenSession(data.jwtToken);
        // this.username = this.loginFrom.controls.username.value;
      }

      this.isLoggedIn = true;
      this.username = this.tokenStorageService.getUser().username;
      this.roles = this.tokenStorageService.getUser().roles;
      console.log('username: ' + this.tokenStorageService.getUser().username);
      console.log('role: ' + this.tokenStorageService.getUser().roles);
      console.log('token: ' + this.tokenStorageService.getUser().jwtToken);

      this.loginFrom.reset();
      if (this.roles.indexOf('ADMIN') !== -1) {

      this.router.navigate(['/home']);
      }
      // else {
      //
      //   this.router.navigate(['/home']);
      //
      // }
    }, error => {
      console.log(error);
      this.securityService.isLoggedIn = false;
      this.errorMessage = 'Tài khoản hoặc mật khẩu không đúng';
    });
  }

  private loadRemberInfo() {
    if (this.tokenStorageService.isAuthenticated()) {
      this.roles = this.tokenStorageService.getUser().roles[0];
      // console.log(this.roles);
      this.username = this.tokenStorageService.getUser().username;
      // console.log(this.username);
      this.urlImg = this.tokenStorageService.getUser().urlImg;
    } else {
      this.roles = null;
      this.username = null;
      this.urlImg = null;
      this.idCustomer = null;
    }
    this.isLoggedIn = this.username != null;
  }
}
