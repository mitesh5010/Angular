import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {  AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, first } from 'rxjs';

function equalValues(controlName1: string, controlName2: string){
   return (control: AbstractControl) => {
     const val1 = control.get(controlName1)?.value;
     const val2 = control.get(controlName2)?.value;
     if (val1 === val2) {
       return null;
      }
      return { valuesNotEqual: true };
    }
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {

  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    passwords : new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    },{
      validators: [equalValues('password', 'confirmPassword')]
    }),

    firstName: new FormControl('', {validators: [Validators.required]}),
    lastName: new FormControl('', {validators: [Validators.required]}),

    address : new FormGroup({
      street: new FormControl('', {validators: [Validators.required]}),
      number: new FormControl('', {validators: [Validators.required]}),
      city: new FormControl('', {validators: [Validators.required]}),
      postalCode: new FormControl('', {validators: [Validators.required]}),
    }),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {validators: [Validators.required]}),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    agree: new FormControl(false, {validators: [Validators.requiredTrue]}),
  })

  ngOnInit(): void {
      const savedForm = window.localStorage.getItem('saved-signup-form');
      if (savedForm) {
        const loadedForm = JSON.parse(savedForm);
        this.form.patchValue({
          email: loadedForm.email,
        })
      }
  
      const subscribtion = this.form.valueChanges
        .pipe(debounceTime(500))
        .subscribe({
          next: (value) => {
            window.localStorage.setItem(
              'saved-signup-form',
              JSON.stringify({ email: value.email })
            );
          },
        });
      this.destroyRef.onDestroy(() => {
        subscribtion.unsubscribe();
      });
    }

  onSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      console.log('Invalid form');
      
      return;
    }
  }

  onReset() {
    this.form.reset();
  }
}
