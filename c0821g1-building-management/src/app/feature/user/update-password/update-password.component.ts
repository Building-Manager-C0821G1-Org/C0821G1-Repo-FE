import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDTO} from '../../../model/user/user-dto';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  id: number;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.changePasswordForm = new FormGroup({
      id: new FormControl(),
      currentPassword: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10), this.checkPassword]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10), this.checkPassword])
    });
  }

  ngOnInit(): void {
  }

  edit(userDTO: UserDTO) {
    userDTO = Object.assign({}, this.changePasswordForm.value);
    userDTO.id = 2;
    this.userService.updateUser(userDTO).subscribe(value => {
      this.callToast();
      }, error => {
      this.callToast1();
    }, () => {
    });
    console.log(userDTO);
  }

  private callToast() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Đổi mật khẩu thành công!😍',
      showConfirmButton: false,
      timer: 2000
    });
  }

  private callToast1() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Đổi mật khẩu thất bại!😥',
      showConfirmButton: false,
      timer: 2000
    });
  }

  checkPassword(abstractControl: AbstractControl): any {
    console.log('c' + abstractControl.value);
    console.log('a ' + abstractControl.value.newPassword);
    console.log('b ' + abstractControl.value.confirmPassword);
    return abstractControl.value.newPassword === abstractControl.value.confirmPassword ? null : {wrongPassword: true};
  }
}

