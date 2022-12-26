import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({});


  ngOnInit(): void {

    this.registerForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        name: new FormControl('',[Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
        phone: new FormControl('',[Validators.required, Validators.minLength(3)]),
        aboutMe: new FormControl('',[Validators.required, Validators.minLength(3)])
        // password: new FormControl('',[Validators.required, Validators.minLength(3)]),
        // passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(3)])
      },
      {
        validators:passwordMatchValidator
      }
    )

  }

  testLoaded() :void {

    const mockData = {
      email:'test@test.com',
      name:'Leifer',
      lastName:'Mendez',
      phone:'55555555',
      aboutMe:'Hola soy Angular developer'
    }

    this.registerForm.setValue(mockData); //espera objeto completo
  }

  testUploaded() :void {

    const mockData = {
      phone:'1-11111111111',
    }

    this.registerForm.patchValue(mockData); //es para actualizar solo algunos campos
  }

}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm) ? null : {'mismatch': true};
}
