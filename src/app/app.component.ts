import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactivoComponent } from "./reactivo/reactivo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ReactivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Formulario Reactivo Angular';
}
