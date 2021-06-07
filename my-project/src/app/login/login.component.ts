import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  data = {};
  msg = '';

  constructor(public fb: FormBuilder, public router: Router) {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      user: [''],
      password: [''],
    });
  }
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('signup'));
  }
  submitForm() {
    if (
      this.loginForm.controls.user.value ===
        (this.data['username'] || this.data['email'] || this.data['mobile']) &&
      this.loginForm.controls.password.value === this.data['password']
    ) {
      this.router.navigate(['display']);
    } else {
      return (this.msg = 'invalid');
    }
  }
}
