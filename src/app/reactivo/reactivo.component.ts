import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.css'
})
export class ReactivoComponent {

  name = new FormControl('');
  email = new FormControl('');

}
