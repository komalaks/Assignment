import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errMsg = '';
  misMatch = '';
  submitted = false;
  falseMisMatch = false;
  arr = {};

  constructor(public fb: FormBuilder, public router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        ],
      ],
      password: ['', [Validators.required, Validators.min(8)]],
      cpassword: ['', [Validators.required, Validators.min(8)]],
      mobile: ['', Validators.required],
      address: ['', [Validators.required, Validators.max(30)]],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.submitted = true;
    if (
      this.signupForm.get('password').value !== this.signupForm.get('cpassword').value
    ) {
      this.falseMisMatch = true;
      return (this.misMatch = 'confirm password does not match');
    } else if (this.signupForm.valid) {
      localStorage.setItem('signup', JSON.stringify(this.signupForm.value));
      alert('created successfully');
      this.submitted = false;
      this.signupForm.reset();
    }
  }
  login() {
    this.router.navigate(['login']);
  }
}
