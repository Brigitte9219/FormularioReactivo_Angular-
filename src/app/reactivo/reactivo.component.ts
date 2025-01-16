import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [ Validators.required, Validators.email])
  });

  //name = new FormControl('', Validators.required);
  //email = new FormControl('', [ Validators.required, Validators.email]);

  procesar(){
    console.log(this.formUser.value);
  }

}
