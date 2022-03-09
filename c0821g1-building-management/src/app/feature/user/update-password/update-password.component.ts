import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDTO} from '../../../model/user/user-dto';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  changePassword: UserDTO;
  id: number;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.changePasswordForm = new FormGroup({
      id: new FormControl(),
      currentPassword: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      newPassword: new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      confirmPassword: new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(10)])
    });
  }

  ngOnInit(): void {
  }

  // getPasswordForm(id: number) {
  //   this.userService.findById(id).subscribe(value => {
  //     this.changePasswordForm = new FormGroup({
  //       id: new FormControl(value.id),
  //       currentPassword: new FormControl(value.currentPassword),
  //       newPasswordCheck: new FormControl(value.newPasswordCheck),
  //       newPassword: new FormControl(value.newPassword),
  //     });
  //   });
  // }


  // exit() {
  //   this.changePasswordForm.reset(this.changePasswordForm);
  // }
  edit(userDTO: UserDTO) {
    userDTO = Object.assign({}, this.changePasswordForm.value);
    userDTO.id = 1;
    this.userService.updateUser(userDTO).subscribe(value => {
      alert('cap nhap thanh cong');
    }, error => {
      alert('khong cap nhap thanh cong');
    }, () => {
    });
    console.log(userDTO);
  }
}

