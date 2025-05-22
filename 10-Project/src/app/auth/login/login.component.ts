import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

function mustContainMark(control:AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { doesNotContainMark: true }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainMark]
    }),
  })

  get emailIsValid() {
    return this.form.controls.email.touched &&
           this.form.controls.email.invalid &&
           this.form.controls.email.dirty
  }

  get passwordIsValid() {
    return this.form.controls.password.touched &&
           this.form.controls.password.invalid &&
           this.form.controls.password.dirty
  }

  onSubmit() {
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;

    console.log(enteredEmail, enteredPassword);
    
    
  }
}