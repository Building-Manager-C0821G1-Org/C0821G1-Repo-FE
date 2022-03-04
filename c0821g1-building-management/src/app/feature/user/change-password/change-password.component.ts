import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  id: number;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      id: new FormControl(''),
      currentPassword: new FormControl(''),
      newPasswordCheck: new FormControl(''),
      newPassword: new FormControl('')
    });
  }

  // private getPasswordForm(id: number) {
  //   this.userService.findById(id).subscribe(value => {
  //     this.changePasswordForm = new FormGroup({
  //       id: new FormControl(value.id),
  //       currentPassword: new FormControl(value.currentPassword),
  //       newPasswordCheck: new FormControl(value.newPasswordCheck),
  //       newPassword: new FormControl(value.newPassword),
  //     });
  //   });
  // }

  edit(id: number) {
    console.log(this.changePasswordForm);
  }
}
