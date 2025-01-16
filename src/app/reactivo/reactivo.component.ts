import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.css'
})
export class ReactivoComponent {

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  formUser: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // segunda vez***
  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  //   'email': new FormControl('', [ Validators.required, Validators.email])
  // });

  // primera vez***
  //name = new FormControl('', Validators.required);
  //email = new FormControl('', [ Validators.required, Validators.email]);

  procesar(){
    console.log(this.formUser.value);
  }

}
